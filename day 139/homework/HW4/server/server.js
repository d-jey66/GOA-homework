import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 5000
app.use(cors({ origin: 'http://localhost:5173' }))
const rates = {
  USD: 0.36,
  EUR: 0.32,
  GBP: 0.28,
  RUB: 25,
  TRY: 7.5,
  JPY: 39
}
app.get('/api/rates', (req, res) => {
  res.json(rates)
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
