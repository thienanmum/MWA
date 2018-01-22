const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');


const app = express();

MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db('january');
    console.log(db);
    db.collection('homework7').findOne({}, function(err, doc) {
        console.log(doc);
    });
});

const decipher = crypto.createDecipher('aes256', 'asaadsaad');

app.get('/secret', (req, res) => {
    // console.log('Secret');
    // db.bind('homework7');
    // db.homework7.find().toArray((err, items) => {
    //     let msg = decipher.update(items[0].message,'hex', 'utf8');
    //     msg += decipher.final('utf8');
    //     res.end(msg);
    // });
});

app.listen(3000);