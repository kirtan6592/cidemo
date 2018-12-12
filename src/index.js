var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    res.send('Hello Express');
})

app.get('/test1/:id', function (req, res) {
    res.send('Hello Express version' + req.params.id);
})

app.post('/test', function (req, res) {
    res.send('Hello Express, You called POST methos.!!');
})
app.listen(1234);