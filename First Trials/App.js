const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3927;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 2');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const fs = require('fs');

// const content = 'Here is some dummy content for node trials';

// fs.appendFile('./demo.txt', content, err => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File written successfully');
//     }
//   });
  