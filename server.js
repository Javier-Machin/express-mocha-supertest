const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});


// /users route, responds with an array of users
app.get('/users', (req, res) => {
  res.send([
    {name: 'Javi', age: 100},
    {name: 'Juan', age: 25},
    {name: 'Miguel', age: 35},
  ]);
});

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

app.listen(3000, () => {
  console.log('Server running in localhost:3000');
});


module.exports.app = app;