const express = require('express');
const app = express();
const port = '5566'

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(5566, () => {
    console.log(`Server is running on localhost:${port}`);
});
