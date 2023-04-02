const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Welcome Home</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>My Node JS Project</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    } else {
        res.write('<html>');
        res.write('<head><title>404 Not Found</title></head>');
        res.write('<body><h1>404 Not Found</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);