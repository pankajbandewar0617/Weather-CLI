require('dotenv').config();
const apiKey = process.env.API_KEY;
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question('Enter a city name : ',function(place){
    const fetch = require("node-fetch");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${apiKey}`)
    .then(response => {
        if (response.ok){
            return response.json();
        }
    throw new Error('Enter valid city name');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        console.log(jsonResponse)
        const temp = jsonResponse['main']['temp'];
        const city = jsonResponse['name'];
        console.log(`The temperature in ${city} is ${temp} degrees.`)
    })
    rl.close();
})

