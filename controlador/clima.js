const axios = require('axios');
//asig await siempre se usan 
const getClima = async(argv) => {
    const ciudadURL = encodeURI(argv.ciudad);
    const datos = []
    if (argv.o == undefined) {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL},ECU&appid=3ee5a08c781d61780eae21457c474bdd&units=metric`)
        return `Temperatura : ${resp.data.main.temp}`;

    } else {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL},ECU&appid=3ee5a08c781d61780eae21457c474bdd&units=metric`)
        let a = argv.o.length;
        if (a == 1) {
            if (argv.o[0] == 'p') {
                console.log(resp.data.main.pressure);
                return `Temperatura : ${resp.data.main.temp} , presion: ${resp.data.main.pressure}`;
            }
            if (argv.o[0] == 'h') {
                return `Temperatura : ${resp.data.main.temp} , humedad: ${resp.data.main.humidity}`
            } else {
                return ` parametro :${argv.o[0]}, no valido intente nuevamente`
            }
        } else {
            return `Temperatura : ${resp.data.main.temp} , presion: ${resp.data.main.pressure}, humedad: ${resp.data.main.humidity}`;
        }

    }

}

module.exports = {
    getClima
}