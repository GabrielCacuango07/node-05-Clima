const clima = require('./controlador/clima');
const argv = require('yargs').options({
        ciudad: {
            alias: 'c',
            desc: 'Nombre para obtener el clima',
            demand: true
        }
    })
    .option('humedad', { alias: 'h', demandOption: false, describe: 'Parametro para obtener la humedd' })
    .option('temperatura', { alias: 't', demandOption: false, describe: 'Parametro para obtemer la temperatura' }).argv


const getInformacion = async(ciudad) => {
    try {
        const temp = await clima.getClima(argv);
        return `Datos de la ciudad: ${ciudad} :  ${temp}`
    } catch (e) {
        return `No sew pudo obtener el clima de la ciudad ${ciudad}`
    }
}

getInformacion(argv.ciudad).then(console.log).catch(console.log);