var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World of CI/CD");
});

app.listen(4000);