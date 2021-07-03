const http = require('http');

http
  .createServer(function (req, res) {
    const url = req.url;
    switch (url) {
      case '/':
        load('./index.html');
        break;
      case '/contact':
        load('./contact.html');
        break;
      case '/about-me':
        load('./about-me.html');
        break;
      default:
        load('./404.html');
        break;
    }
    function load(url) {
        
    }
  })
  .listen(8080);
