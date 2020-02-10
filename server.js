const express = require('express')
const path = require('path');
const app = express();

app.use( express.static( "public" ) );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('sahil_hawal', { title: 'Hello World!' });
});

app.listen(3000)
console.log("server started")