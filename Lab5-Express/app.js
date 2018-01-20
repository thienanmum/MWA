const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

// const fetchUser = require('./fetchPromise');
// const fetchUser = require('./fetchAsync');
const fetchUser = require('./fetchObservable');

const app = express();

app.enable('trust proxy');
app.enable('view cache');
app.enable('case sensitive routing');
app.enable('strict routing');
app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.get('/', function(req, res) {
    res.end('Use path /users to load all users.');
});
app.get('/users', function(req, res) {
    fetchUser(res);
});

app.listen(3000, function() {console.log('server listening on port 3000')});