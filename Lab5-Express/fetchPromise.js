const fetch = require('node-fetch');

function fetchUsers(res) {
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => res.render('users', {users:data}))
        .catch(err => console.log(err));  
}

module.exports = fetchUsers;