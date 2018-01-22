const express = require('express');
const app = express();

const middleware = require('./myMiddleware');

const routehandler = (req, res) => {
    console.log("Enter route handler");
};

app.use(middleware);
app.use('/users', middleware);
app.get('/users/:id', middleware, routehandler);

app.use(function(req, res, next) {
    console.log("middleware")
    next();
    res.end(JSON.stringify({query: req.query, params: req.params}));
});

app.get('/users/:id', (req, res) => {
    console.log("route handler");
    res.write("2nd List Users");
});

app.listen(3000);