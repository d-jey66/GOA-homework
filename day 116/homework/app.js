const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./index.html", "utf-8");  
        res.end(html);
    } 
    else if (req.url === "/learn-more") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./learn-more.html", "utf-8");  
        res.end(html);
    }
    else if (req.url === "/mern") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./mern.html", "utf-8");  
        res.end(html);
    }
    else if (req.url === "/nuxt") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./nuxt.html", "utf-8");  
        res.end(html);
    }
    else if (req.url === "/remix") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./remix.html", "utf-8");  
        res.end(html);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

const LocalHost = 3101;
server.listen(LocalHost, () => {
    console.log('Server running on http://localhost:' + LocalHost);
});
