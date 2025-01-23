import express from "express"
import cors from "cors"

const port = 5000
const app = express()
app.use(cors({origin: "http://localhost:5173"}))

const user = {
    id: 1003237482,
    name: "lil joe",
    email: "liljoe@example.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvarwf0lH_wunQMqGgAQ8wID1FygyIe8mIVw&s"
}


app.get("/api/user", (req, res) => {
    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})