import { useState, useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

const ICE_SERVERS = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ]
}

function App() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [roomId, setRoomId] = useState('')
  const [joined, setJoined] = useState(false)
  const [status, setStatus] = useState('Ready')
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null)

  // Initialize socket
  useEffect(() => {
    const newSocket = io(SERVER_URL)
    setSocket(newSocket)

    newSocket.on('connect', () => {
      console.log('Connected to server')
      setStatus('Connected to server')
    })

    return () => {
      newSocket.close()
    }
  }, [])

  // Setup socket listeners
  useEffect(() => {
    if (!socket) return

    socket.on('user-joined', async ({ userId }) => {
      setStatus('Peer joined, sending offer...')
      await createOffer()
    })

    socket.on('offer', async ({ offer }) => {
      setStatus('Received offer, sending answer...')
      await handleOffer(offer)
    })

    socket.on('answer', async ({ answer }) => {
      setStatus('Received answer')
      await handleAnswer(answer)
    })

    socket.on('ice-candidate', async ({ candidate }) => {
      await handleIceCandidate(candidate)
    })

    socket.on('user-left', () => {
      setStatus('Peer disconnected')
      setRemoteStream(null)
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close()
        peerConnectionRef.current = null
      }
    })

    return () => {
      socket.off('user-joined')
      socket.off('offer')
      socket.off('answer')
      socket.off('ice-candidate')
      socket.off('user-left')
    }
  }, [socket, roomId])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop())
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close()
      }
    }
  }, [localStream])

  const initLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: true
      })
      setLocalStream(stream)
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }
      setStatus('Camera ready')
      return stream
    } catch (err) {
      setStatus('Camera access denied')
      console.error('Error accessing media devices:', err)
      return null
    }
  }

  const createPeerConnection = (stream: MediaStream) => {
    const pc = new RTCPeerConnection(ICE_SERVERS)

    pc.onicecandidate = (event) => {
      if (event.candidate && socket) {
        socket.emit('ice-candidate', {
          roomId,
          candidate: event.candidate
        })
      }
    }

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0])
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0]
      }
      setStatus('Connected')
    }

    pc.onconnectionstatechange = () => {
      setStatus(`Connection: ${pc.connectionState}`)
    }

    stream.getTracks().forEach(track => {
      pc.addTrack(track, stream)
    })

    return pc
  }

  const createRoom = async () => {
    if (!socket) return

    const stream = await initLocalStream()
    if (!stream) return

    socket.emit('create-room', (response: any) => {
      if (response.success) {
        setRoomId(response.roomId)
        setJoined(true)
        setStatus(`Room created: ${response.roomId}`)
        peerConnectionRef.current = createPeerConnection(stream)
      } else {
        setStatus(`Error: ${response.error}`)
      }
    })
  }

  const joinRoom = async () => {
    if (!socket || !roomId.trim()) {
      setStatus('Enter room ID')
      return
    }

    const stream = await initLocalStream()
    if (!stream) return

    socket.emit('join-room', { roomId }, (response: any) => {
      if (response.success) {
        setJoined(true)
        setStatus(`Joined room: ${roomId}`)
        peerConnectionRef.current = createPeerConnection(stream)
      } else {
        setStatus(`Error: ${response.error}`)
      }
    })
  }

  const createOffer = async () => {
    if (!peerConnectionRef.current || !socket) return

    try {
      const offer = await peerConnectionRef.current.createOffer()
      await peerConnectionRef.current.setLocalDescription(offer)
      socket.emit('offer', { roomId, offer })
    } catch (err) {
      console.error('Error creating offer:', err)
    }
  }

  const handleOffer = async (offer: RTCSessionDescriptionInit) => {
    if (!peerConnectionRef.current || !socket) return

    try {
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer))
      const answer = await peerConnectionRef.current.createAnswer()
      await peerConnectionRef.current.setLocalDescription(answer)
      socket.emit('answer', { roomId, answer })
    } catch (err) {
      console.error('Error handling offer:', err)
    }
  }

  const handleAnswer = async (answer: RTCSessionDescriptionInit) => {
    if (!peerConnectionRef.current) return

    try {
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer))
    } catch (err) {
      console.error('Error handling answer:', err)
    }
  }

  const handleIceCandidate = async (candidate: RTCIceCandidateInit) => {
    if (!peerConnectionRef.current) return

    try {
      await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate))
    } catch (err) {
      console.error('Error adding ICE candidate:', err)
    }
  }

  const leaveRoom = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop())
    }
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close()
      peerConnectionRef.current = null
    }
    setLocalStream(null)
    setRemoteStream(null)
    setJoined(false)
    setRoomId('')
    setStatus('Disconnected')
  }

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-4">
        
        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border border-cyan-500/20 rounded">
          <span className="text-cyan-400 text-sm">{status}</span>
          {joined && <span className="w-2 h-2 bg-green-500 rounded-full pulse"></span>}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Local Video */}
          <div className="relative aspect-video bg-zinc-900 rounded overflow-hidden border border-cyan-500/20 glow">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded text-cyan-400 text-xs">
              YOU
            </div>
          </div>

          {/* Remote Video */}
          <div className="relative aspect-video bg-zinc-900 rounded overflow-hidden border border-cyan-500/20 glow">
            {remoteStream ? (
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600">
                Waiting for peer...
              </div>
            )}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded text-cyan-400 text-xs">
              PEER
            </div>
          </div>
        </div>

        {/* Controls */}
        {!joined ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="room-id"
              className="flex-1 bg-zinc-900 border border-cyan-500/20 rounded px-4 py-2 text-cyan-400 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={joinRoom}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded transition"
            >
              JOIN
            </button>
            <button
              onClick={createRoom}
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-cyan-400 border border-cyan-500/20 rounded transition"
            >
              CREATE
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={roomId}
              readOnly
              onClick={(e) => {
                e.currentTarget.select()
                navigator.clipboard.writeText(roomId)
              }}
              className="flex-1 bg-zinc-900 border border-cyan-500/20 rounded px-4 py-2 text-cyan-400 cursor-pointer"
              title="Click to copy"
            />
            <button
              onClick={leaveRoom}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded transition"
            >
              LEAVE
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-zinc-600 text-xs">
          <p>MERN Stack WebRTC • MongoDB + Express + React + Node.js</p>
        </div>
      </div>
    </div>
  )
}

export default App
