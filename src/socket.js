const socketIO = require('socket.io');

let io;

const setupSocketIO = (server) => {
  io = socketIO(server, {
    cors: {
      origin: "*", // Adjust according to your security requirements
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });

    // Additional event listeners for specific device updates can be added here
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io is not initialized!');
  }
  return io;
};

module.exports = { setupSocketIO, getIO };