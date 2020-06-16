const axios = require('axios');
//asig await siempre se usan 
const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL},ECU&appid=3ee5a08c781d61780eae21457c474bdd&units=metric`)
    console.log(resp.data.main.pressure);
    console.log(resp.data.main.humidity);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}