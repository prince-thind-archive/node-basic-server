const fs = require('fs');
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  const content = load('./index.html');
  res.send(content);
});

app.get('/about', (req, res) => {
  const content = load('./about.html');
  res.send(content);
});
app.get('/contact-me', (req, res) => {
  const content = load('./contact-me.html');
  res.send(content);
});

app.listen(port, () => {
  console.log('listening on port:' + port);
});

function load(file) {
  const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
  return data;
}

// function checkExistence(file) {
//   let fileExist = false;
//   switch (file) {
//     case './index.html':
//     case './about.html':
//     case './contact-me.html':
//       fileExist = true;
//       break;
//     default:
//       fileExist = false;
//   }
//   return fileExist;
// }
