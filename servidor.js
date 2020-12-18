const express = require('express');
const path = require('path');
const spdy = require('spdy');
const compression = require('compression');
const fs = require('fs');
const http = require('http');

const app = express();
const CERTS_ROOT = './';
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/.well-known/acme-challenge', express.static('.well-known/acme-challenge'));

app.use('/transp', express.static('transp'));
app.use('/videos', express.static('videos'));

app.get('*', function(req, res){
  res.redirect('/');
});
const credentials = {
  cert: fs.readFileSync(path.resolve(CERTS_ROOT, 'certificado.pem')),
  key: fs.readFileSync(path.resolve(CERTS_ROOT, 'key.pem')),
};
const httpServer = 
http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
})
const httpsServer = spdy.createServer(credentials, app);
httpServer.listen(8080);
httpsServer.listen(8430);