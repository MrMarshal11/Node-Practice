import fs from "fs";
import http from "node:http";

http.createServer((req, res) => {
  fs.readFile("random.html", (err, data) => {
    res.writeHead(200, {'Content-Type' : 'Text/html'})
    res.write(data);
    res.end();
  });
}).listen(8080);

console.log('http://127.0.0.1:8080/');