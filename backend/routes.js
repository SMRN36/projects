const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
  const method = req.method;

  if (url === '/') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body>');
      if (data) {
        res.write(`<div>${data}</div>`);
      }
      res.write(`
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      `);
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        if (err) {
          console.error(err);
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></head>');
    res.write('<body><h1>Welcome to My page</h1></body>');
    res.write('</html>');
    res.end();
  }
}

module.exports = requestHandler;