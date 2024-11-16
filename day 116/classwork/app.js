const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./index.html", "utf-8");
        res.end(html);
    } else if (req.url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        let css = fs.readFileSync("./style.css", "utf-8");
        res.end(css);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

const LocalHost = 3500;
server.listen(LocalHost, () => {
    console.log('Server running on http://localhost:' + LocalHost);
});
