const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    const url = req.url;
    let content = null;

    switch (url) {
      case '/':
      case '/index.html':
        content = load('./html/index.html');
        break;
      case '/contact-me.html':
        content = load('./html/contact-me.html');
        break;
      case '/about.html':
        content = load('./html/about.html');
        break;
      default:
        content = load('./html/404.html');
        break;
    }
    console.log(url);
    return content;

    function load(file) {
      fs.readFile(file, function (err, data) {
        if (err) {
          console.log(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
