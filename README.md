# Report 05 clima 🚀
## Name: Gabriel Cacuango
Console applicaction which to consume the services of an API to obtain values ​​such as temperature, humidity, press based on any city.

## Installation 🔧
To install and run this proyect just type and execute
```bash
npm install
```
## example ⚙️
for help please 
```
node app.js help
```
Options:
  --help             Show help                                         
  --version          Show version number                               
  --ciudad, -c       Nombre para obtener el clima                    
  --humedad, -h      Parametro para obtener la humedd
  --temperatura, -t  Parametro para obtemer la temperatura

example of execution:
```
node app.js -c "Quito"
```
return only the city and temperature 

```
node app.js -c "Quito" -o p -o h
```
return the city, temperature,pressure and humidity params of pressure and humidity it's optional
## Author
* **Gabriel Cacuango** - *Estudiante UPS* - [GabrielCacuango](https://github.com/GabrielCacuango07)