const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("demo text");
}).listen(8080);

console.log("http://127.0.0.1:8080/");

const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", number => {
  console.log(`started ${number}`);
});

eventEmitter.emit("start", 45);

exports.myDateTime = function () {
  return Date();
};