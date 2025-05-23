const express = require('express');
const path = require('path');
const app = express();
const port = '5000'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => {
  console.log(`Server is running on localhost:${port}`);
});
