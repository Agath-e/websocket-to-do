const express = require('express');
const socket = require('socket.io');

const app = express();

let tasks = [
  { id: 'dfsadf324s', name: 'Shopping'},
  { id: 'dfs2ad6724s', name: 'Go out with a dog'}
];

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

const io = socket(server);

io.on('connection', (socket) => {
  socket.emit('updateData', tasks);

  socket.on('addTask', (task) => {
    console.log('New task added ' + task);
    tasks.push(task);
    socket.broadcast.emit('addTask', task);

  });

  socket.on('removeTask', (taskId) => {
    console.log('Task with index ' + taskId + ' removed');
    tasks.filter(task => {return task.id != removedTask.id})
    socket.broadcast.emit('removeTask', taskId);
  });
});

  
  app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
  }); 