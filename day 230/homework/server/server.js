import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/webrtc-chat';
mongoose.connect(MONGO_URI)
  .then(() => console.log('📦 MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Room schema
const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 } // 24h TTL
});
const Room = mongoose.model('Room', roomSchema);

// Active rooms and users
const rooms = new Map(); // roomId -> Set of socketIds

// Socket.io signaling
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('create-room', async (callback) => {
    const roomId = Math.random().toString(36).substring(2, 9);
    
    try {
      await Room.create({ roomId });
      rooms.set(roomId, new Set([socket.id]));
      socket.join(roomId);
      
      callback({ success: true, roomId });
      console.log(`🏠 Room created: ${roomId}`);
    } catch (error) {
      callback({ success: false, error: error.message });
    }
  });

  socket.on('join-room', async ({ roomId }, callback) => {
    try {
      const room = await Room.findOne({ roomId });
      if (!room) {
        return callback({ success: false, error: 'Room not found' });
      }

      if (!rooms.has(roomId)) {
        rooms.set(roomId, new Set());
      }

      const roomUsers = rooms.get(roomId);
      if (roomUsers.size >= 2) {
        return callback({ success: false, error: 'Room is full' });
      }

      roomUsers.add(socket.id);
      socket.join(roomId);
      
      // Notify other user in room
      socket.to(roomId).emit('user-joined', { userId: socket.id });
      
      callback({ success: true, roomId });
      console.log(`👤 User joined room: ${roomId}`);
    } catch (error) {
      callback({ success: false, error: error.message });
    }
  });

  socket.on('offer', ({ roomId, offer }) => {
    socket.to(roomId).emit('offer', { offer, userId: socket.id });
  });

  socket.on('answer', ({ roomId, answer }) => {
    socket.to(roomId).emit('answer', { answer, userId: socket.id });
  });

  socket.on('ice-candidate', ({ roomId, candidate }) => {
    socket.to(roomId).emit('ice-candidate', { candidate, userId: socket.id });
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
    
    // Remove from all rooms
    for (const [roomId, users] of rooms.entries()) {
      if (users.has(socket.id)) {
        users.delete(socket.id);
        socket.to(roomId).emit('user-left', { userId: socket.id });
        
        if (users.size === 0) {
          rooms.delete(roomId);
        }
      }
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', rooms: rooms.size });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
