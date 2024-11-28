const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  // Check if id is a number
  if (!/^\d+$/.test(id)) {
    // If not, send 404
    return res.status(404).send('Not Found');
  }
  // If id is a number, return the payment method message
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing
module.exports = app;
