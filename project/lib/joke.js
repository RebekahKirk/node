const fetch = require('node-fetch');

const url = 'https://sv443.net/jokeapi/v2/joke/Any?type=single';

const getJoke = async() =>{
    let data = await fetch(url);
    return await data.json();
}

getJoke();

module.exports = getJoke;