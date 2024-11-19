import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('End message...');
}).listen(8080);

console.log('http://127.0.0.1:8080');