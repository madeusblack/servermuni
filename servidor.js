const express = require('express');
const path = require('path');
const spdy = require('spdy');
const compression = require('compression');
const fs = require('fs');
const http = require('http');
const https = require('https')

const app = express();
const CERTS_ROOT = './';
app.use(compression());
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

const httpServer = http.createServer(app);
httpServer.listen(8080);
