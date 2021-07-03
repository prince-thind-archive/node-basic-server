const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    const url = req.url;
    load('.' + url);

    function load(file) {
      const fileExist = checkExistence(file);
      if (!fileExist) file = './404.html';

      fs.readFile(file, function (err, data) {
        if (err) {
          console.log(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
    }

    function checkExistence(file) {
      let fileExist = false;
      switch (file) {
        case './index.html':
        case './about.html':
        case './contact-me.html':
          fileExist = true;
          break;
        default:
          fileExist = false;
      }
      return fileExist;
    }
  })
  .listen(8080);
