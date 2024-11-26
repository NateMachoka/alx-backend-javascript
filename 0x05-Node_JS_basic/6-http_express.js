const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
