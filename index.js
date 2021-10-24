const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const url = req.url;
  const html = getHtml(url);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(html);
  res.end();
});

server.listen(8080);

function getHtml(url) {
  console.log(url);
  switch (url) {
    case '/':
    case '/index':
      return getFile('index');
    case '/about':
      return getFile('about');
    case '/contact':
      return getFile('contact');
    default:
      return getFile('404');
  }
}

function getFile(name) {
  try {
    const path = './' + name+'.html';
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.log(err);
  }
}
