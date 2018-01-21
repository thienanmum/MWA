'use strict'
const express = require('express');
const validator = require('express-validator');
const morgan = require('morgan');
const cors = require('cors');

const grades = require("./grades")

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

function validate(req) {
    req.assert('name', 'name is required.').notEmpty();
    req.assert('course', 'course is required.').notEmpty();
    req.assert('grade', 'grade is required.').notEmpty();
    const errors = req.validationErrors();
    if (errors) throw errors;
}

app.route('/grades')
.get((req, res) => res.status(200).json(grades.getAll()))
.post(validator(), (req, res) => {
    validate(req);
    res.status(200).json(grades.save(req.body));});

app.route('/grades/:id')
.get((req, res) => res.status(200).json(grades.get(parseInt(req.params.id))))
.put(validator(), (req, res) => {
    validate(req);
    req.body.id = parseInt(req.params.id);
    res.status(200).json(grades.save(req.body));
})
.delete((req, res) => {
    grades.delete(parseInt(req.params.id));
    res.status(200).json("Delete object sucessfully.");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(400).json(err);
});

app.listen(3000, () => console.log('Server listening on 3000'));