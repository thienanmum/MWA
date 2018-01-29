const fetch = require('node-fetch');

async function fetchUsers(res) {
    try {
        const response =  await fetch('http://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        res.render('users', {users:data});
    } catch (err) {
        console.log(err);
    }
}

module.exports = fetchUsers;