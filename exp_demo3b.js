var express = require('express');
var app = express();

var routedemo = require('./exp_demo3a.js');

// both exp_demo3a.js and exp_demo3b.js are in same directory
app.use('/routedemo', routedemo);

app.listen(3000);
