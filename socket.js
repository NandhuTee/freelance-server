

import User from './models/User.js'; 

export const setupSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });

    // Handle user list request
    socket.on('getUsers', async (currentUserId) => {
      try {
        const users = await User.find({}, '-password'); // exclude password
        socket.emit('usersList', users); // send list to requester
      } catch (error) {
        console.error("❌ Error getting users", error);
      }
    });
  });
};
