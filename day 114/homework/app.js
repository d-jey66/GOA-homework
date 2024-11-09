const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./napoleon.html", "utf-8")
        res.end(html)
    } else if (req.url === "/constantinople") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./constantinople.html", "utf-8")
        res.end(html)
    } else if (req.url === "/erekle") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./erekle.html", "utf-8")
        res.end(html)
    } else if (req.url === "/davit") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./davit.html", "utf-8")
        res.end(html)
    } else if (req.url === "/vakhtang") {
        res.writeHead(200, { "Content-Type": "text/html" })
        let html = fs.readFileSync("./vakhtang.html", "utf-8")
        res.end(html)
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end("<h1>404 - Page Not Found</h1>")
    }
})

const LocalHost = 3500
server.listen(LocalHost)
console.log('Server running on port http://localhost:' + LocalHost)