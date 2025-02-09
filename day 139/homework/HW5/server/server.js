import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 5000
app.use(cors({ origin: 'http://localhost:5173' }))
const quotes = [
  { id: 1, text: "სჯობს ტყუილით ქვე ყოფნასა ზე სიმართლით ავიბარგო"},
  { id: 2, text: "თუ კაცსა ცოდნა არა აქვს გასტანჯავს წუთისოფელი"},
  { id: 3, text: "არამი ფულით ნაყიდი განძი ვის შერჩენიაო" },
  { id: 4, text: "ბრიყვი კაცისა სიცოცხლე,სიკვდილზე უარესია"},
  { id: 5, text: "ბოროტება უთუოდ დაისჯებაო"}
]
app.get('/api/quotes', (req, res) => res.json(quotes))
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
