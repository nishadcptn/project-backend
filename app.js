const express = require('express');
const homeRouter = require('./routes/home/home');

const app = express();
app.set('view engine', 'ejs');

app.use('/home',homeRouter);

app.get('/', function (req, res) {
    res.send('homepage');
});


module.exports = app;