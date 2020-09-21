const express = require('express');
const path = require('path');
const spdy = require('spdy');
const fs = require('fs');
const http = require('http');
const app = express();
const CERTS_ROOT = './';

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/transp', express.static('transp'));
app.use('/.well-known', express.static('well'));
app.use('/videos', express.static('videos'));

app.get('*', function(req, res){
  res.redirect('/');
});
const credentials = {
  cert: fs.readFileSync(path.resolve(CERTS_ROOT, 'muninogales.cert')),
  key: fs.readFileSync(path.resolve(CERTS_ROOT, 'muninogales.key')),
};
const httpServer = http.createServer(app);
const httpsServer = spdy.createServer(credentials, app);
httpServer.listen(8080);
httpsServer.listen(8430);