const express = require('express')
const path = require('path')
const app = express()
const port = 5910

app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})