const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // broadcast message to all
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
