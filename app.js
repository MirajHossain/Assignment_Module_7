const express = require('express');
const app = express();

console.log("App is starting...");

app.get('/', (req, res) => {
  res.send('Backend Running successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
