const express = require('express');
const mongo = require('mongoskin');
const crypto = require('crypto');

const app = express();
const db = mongo.db('mongodb://localhost:27017/january');

app.get('/secret', (req, res) => {
    db.bind('homework7');
    db.homework7.findOne({}, (err, item) => {
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        let msg = decipher.update(item.message,'hex', 'utf8');
        msg += decipher.final('utf8');
        res.end(msg);
    });
});

app.listen(3000);