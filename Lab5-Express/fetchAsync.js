const fetch = require('node-fetch');

async function fetchUsers(res) {
    const response =  await fetch('http://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    res.render('users', {users:data});
}

module.exports = fetchUsers;