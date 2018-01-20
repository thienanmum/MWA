const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.get("/users", function(req, res) {
    res.json([{name:'An'}, {name:'Nhu'}]);
});

app.listen(3000);