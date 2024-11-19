import http from 'node:http';
import myDateTime from './testingExport.mjs';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(`The date and time are currently: ${myDateTime()}`)
    res.end();
}).listen(8080);

console.log('http://127.0.0.1:8080');