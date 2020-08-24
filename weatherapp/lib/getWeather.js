const fetch = require('node-fetch');
require('dotenv').config();

const getWeather = async(location, countryCode) =>{
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=${process.env.APPID}`);
    return await data.json();
}
// const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=${process.env.APPID}`;

// const getWeather = async() =>{
//     let data = await fetch(url);
//     return await data.json();
// }
module.exports = getWeather;