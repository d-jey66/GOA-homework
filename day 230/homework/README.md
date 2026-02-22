# WebRTC Video Chat - MERN Stack

Minimal video chat app built with MongoDB, Express, React, Node.js, TypeScript, and Tailwind CSS.

## Stack
- **Backend**: Node.js + Express + Socket.io + MongoDB
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **WebRTC**: Peer-to-peer video/audio streaming

## Features
- Create/join rooms with unique IDs
- Real-time peer-to-peer video chat
- Socket.io signaling server
- MongoDB room persistence (24h TTL)
- Copy room ID to share

## Setup

### Prerequisites
- Node.js 18+
- MongoDB running locally or MongoDB Atlas URI

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
cp .env.example .env
# Edit .env if backend is not on localhost:3000
npm run dev
```

## Usage

1. Start MongoDB (if local):
   ```bash
   mongod
   ```

2. Start backend (terminal 1):
   ```bash
   cd server && npm run dev
   ```

3. Start frontend (terminal 2):
   ```bash
   cd client && npm run dev
   ```

4. Open http://localhost:5173
5. Click "CREATE" to make a room
6. Share the room ID with another user
7. Other user enters room ID and clicks "JOIN"

## Architecture

**Backend** (`server/server.js`):
- Express HTTP server
- Socket.io for WebRTC signaling
- MongoDB stores active rooms
- Handles offer/answer/ICE candidate exchange

**Frontend** (`client/src/App.tsx`):
- React component with WebRTC logic
- Socket.io client for signaling
- getUserMedia for camera/mic access
- RTCPeerConnection for P2P connection

## Deployment

### Backend
Deploy to Heroku, Railway, or any Node.js host. Set environment variables:
- `MONGO_URI`: Your MongoDB connection string
- `CLIENT_URL`: Your frontend URL (for CORS)
- `PORT`: Server port

### Frontend
Deploy to Vercel, Netlify, or Cloudflare Pages. Set build settings:
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable `VITE_SERVER_URL`: Your backend URL

## Troubleshooting

**Camera not working?**
- Grant browser permissions
- Use HTTPS in production (required for getUserMedia)

**Connection fails?**
- Check MongoDB is running
- Verify backend/frontend URLs in .env files
- Check browser console for errors

**CORS errors?**
- Update `CLIENT_URL` in server/.env

## License
MIT
