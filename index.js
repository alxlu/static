var express = require('express');
var multer = require('multer');
var ngrok = require('ngrok');
var PORT = 3000;

var app = express();

app.use(multer({dest: './uploads',
               rename: function(fieldname, filename) {
                 return filename + Date.now();
               },
               onFileUploadStart: function(file) {
                 console.log(file.originalname + ' is starting...');
               },
               onFileUploadComplete: function(file) {
                 console.log(file.fieldname + 'uploaded to ' + file.path)
               }
}));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.post('/api/file', function(req, res) {
});

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
});

ngrok.connect(PORT, function(err, url) {
  console.log(url);
});
