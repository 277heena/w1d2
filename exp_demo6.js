var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});

app.listen(3000);
