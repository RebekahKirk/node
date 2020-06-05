const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/users';

const getPlaceholder = async() => {
    let data = await fetch(url);
    console.log(await data.json());
}

// get getPlaceholder();
module.exports = getPlaceholder;