const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./index.html", "utf-8")
        res.end(html)
    }
})
const portNumber = 3500

console.log(http)

server.listen(portNumber)
console.log('Server running on port http://localhost:${portNumber}')