const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("hello davit");
    }
    else if(req.url === "/lomi"){
        res.end("<h1>This is about Davit Gedzelishvili</h1>");
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

const localhost = 3000;

server.listen(localhost, (err) => {
    if (err) {
        const errorMessage = `Error: Unable to create server: ${err.message}`;
        console.error(errorMessage);
        fs.writeFile('error_log.txt', errorMessage, (writeErr) => {
            if (writeErr) {
                console.error('Failed to write error to file:', writeErr.message);
            } else {
                console.log('Error logged to error_log.txt');
            }
        });
    } else {
        console.log(`server listening: http://localhost:${localhost}`);
    }
});
