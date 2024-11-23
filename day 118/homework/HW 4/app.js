const express = require('express')
const path = require('path')
const app = express()
const port = 5101

app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
})

app.all("*", (req, res) => {
    res.status(404).send("404 not found")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})