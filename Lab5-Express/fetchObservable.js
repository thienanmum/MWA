const fetch = require('node-fetch');
const Re = require('@reactivex/rxjs');

function fetchUsers(res) {
    Re.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/')).subscribe(function(response) {
        Re.Observable.fromPromise(response.json()).subscribe(function(data) {res.render('users', {users:data})});
    });    
}

module.exports = fetchUsers;
