'use strict'
const data = [];
var nextId = 0;
exports.getAll = () => {
    return data;
}
exports.get = id => {
    const grade = data.find(element => element.id === id);
    return grade;
}
exports.save = grade => {
    var index = 0;
    if (grade && grade.id) { // found existing object, replace it by the input grade.
        index = data.findIndex(element => element.id === grade.id);
        if (index < 0) index = data.length;
    } else { // set id for the new object
        index = data.length;
        grade.id = ++ nextId;
    }
    data[index] = grade;
    return grade;
}
exports.delete = id => {
    const index = data.findIndex(element => element.id === id);
    if (index >= 0) data.splice(index, 1);
}