const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about") {
        const aboutContent = "<h1>This is information about me</h1>";
        // დაწერა about გვერდის შინაარსი ფაილში
        fs.writeFile('about.txt', aboutContent, (err) => {
            if (err) {
                console.error('Error writing about file:', err.message);
            }
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(aboutContent);
    } else if (req.url === "/dashboard") {
        const dashboardContent = "<h1>Welcome to the dashboard</h1>";
        // დაწერა dashboard გვერდის შინაარსი ფაილში
        fs.writeFile('dashboard.txt', dashboardContent, (err) => {
            if (err) {
                console.error('Error writing dashboard file:', err.message);
            }
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(dashboardContent);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const localhost = 3000;

server.listen(localhost, (err) => {
    if (err) {
        console.error('Server could not be started:', err.message);
    } else {
        console.log(`Server listening at http://localhost:${localhost}`);
    }
});
