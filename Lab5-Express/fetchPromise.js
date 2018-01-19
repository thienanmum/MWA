const fetch = require('node-fetch');

function fetchUsers(res) {
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => res.render('users', {users:data}));  
}

module.exports = fetchUsers;