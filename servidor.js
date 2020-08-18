const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/transp', express.static('transp'));
app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(8080,()=>console.log('Servidor Funcionando en el puerto 80'));