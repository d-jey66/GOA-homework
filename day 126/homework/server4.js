const express = require('express');
const app = express();

const PORT = 1101;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to BMW</h1><p>BMW is a German multinational company that produces luxury vehicles and motorcycles.</p>');
});

app.get('/history', (req, res) => {
  res.send('<h1>BMW History</h1><p>Founded in 1916, BMW started as an aircraft engine manufacturer. It evolved into one of the world’s leading car manufacturers.</p>');
});

app.get('/models', (req, res) => {
  res.send('<h1>BMW Models</h1><ul><li>BMW 3 Series</li><li>BMW 5 Series</li><li>BMW X5</li><li>BMW M Series</li></ul>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact BMW</h1><p>For more information, visit our website or contact us at contact@bmw.com.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
