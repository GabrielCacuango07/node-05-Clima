//import library axios for consume API external openweathermap
const axios = require('axios');
//asig await siempre se usan 
const getClima = async(argv) => {
        //encodeURI complete the spaces whith & in http peticions example "buenos&aires"
        const ciudadURL = encodeURI(argv.ciudad);
        //define argument options for parametres humidity and pressure
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
    //exports modeule get clima to use un app principal class
module.exports = {
    getClima
}