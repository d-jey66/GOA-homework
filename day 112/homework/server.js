const http = require('http');
const fs = require('fs');

const PORT = 3000;

const aboutContent = `<h1>This is the About page</h1>`;
const homepageContent = `
    <h1>Homepage</h1>
    <a href="/about">Go to About page</a><br>
    <a href="/random-file">Show Random File</a>
`;

const messages = ["Hello", "Hi", "Good day", "Nice to meet you", "Thank you"];
for (let i = 1; i <= 20; i++) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    fs.writeFileSync(`file${i}.txt`, `File #${i}: ${randomMessage}`);
}

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(aboutContent);
    } else if (req.url === '/homepage') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homepageContent);
    } else if (req.url === '/random-file') {
        const files = fs.readdirSync('./');
        const textFiles = files.filter(file => file.startsWith('file') && file.endsWith('.txt'));
        const randomFile = textFiles[Math.floor(Math.random() * textFiles.length)];
        const fileContent = fs.readFileSync(randomFile, 'utf8');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Random File</h1><p>${fileContent}</p>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
