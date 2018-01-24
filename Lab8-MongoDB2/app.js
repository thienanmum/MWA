const express = require('express');
const mongo = require('mongoskin');

const app = express();
const db = mongo.db('mongodb://localhost:27017/homework8');

db.collection('points').ensureIndex({location:'2d'}, true, (err, data)=> {console.log(`Index ${data} was created.`)});

app.use(express.json());

// Point {name, category, location[long, lat]}
app.route('/api/points')
    .get((req, res) => {
        db.collection('points').find({}).toArray((err, docArrs) => {
            if (err) throw err;
            res.status(200).json(docArrs);
        });
    })
    .post((req, res) => {
        db.collection('points').insert(req.body, (err, doc) => {
            if (err) throw err;
            res.status(200).json(doc);
        });
    });
app.route('/api/points/:id')
    .get((req, res) => {
        db.collection('points').findById(req.params.id, (err, doc) => {
            if (err) throw err;
            res.status(200).json(doc);
        });
    })
    .put((req, res) => {
        db.collection('points').updateById(req.params.id, req.body, (err, doc) => {
            if (err) throw err;
            res.status(200).json(doc);
        });
    })
    .delete((req, res) => {
        db.collection('points').removeById(req.params.id, (err, doc) => {
            if (err) throw err;
            res.status(200).json(doc);
        });
    });
app.get('/api/search/:category/:name?', (req, res) => {
    const myLocation = [-91.9694793, 41.0178278];
    const query = {'$and':[{category:req.params.category}, {location: {'$near':myLocation}}]};
    if (req.params.name) query['$and'].push({name:req.params.name});
    console.log(query);
    db.collection('points').find(query).limit(3).toArray((err, docs) => {
        if (err) throw err;
        res.status(200).json(docs);
    });
});

app.get((err, req, res, next) => {
    console.log(err);
    res.status(500).json(err);
});

app.listen(3000, () => console.log('Server listening on port 3000'));

