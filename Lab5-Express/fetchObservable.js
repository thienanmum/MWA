const fetch = require('node-fetch');
const Re = require('@reactivex/rxjs');

function fetchUsers(res) {
    Re.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'))
        .flatMap(r => Re.Observable.fromPromise(r.json()))
        .subscribe(function(data) {res.render('users', {users:data})}, (err) => console.log(error)); 
}

module.exports = fetchUsers;
