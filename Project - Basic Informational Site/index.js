import http from "node:http";
import fs from "fs";
import { URL } from "node:url";

// Read and display any file
function readThatFile(file, res) {
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

// Creating new URL
const mainURL = new URL("http://127.0.0.1:8080");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      readThatFile("index.html", res);
    } else if (req.url === "/about") {
      readThatFile("about.html", res);
    } else if (req.url === "/contact-us") {
      readThatFile("contact-us.html", res);
    } else {
      readThatFile("404.html", res);
    }
  })
  .listen(8080, () => console.log(`Server is operational at ${mainURL}`));