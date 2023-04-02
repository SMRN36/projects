const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hey there, I am Simran!');
    console.log('My name was requested.');
});

server.listen(4000);