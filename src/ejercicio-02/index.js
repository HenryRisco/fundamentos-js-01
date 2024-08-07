var puntuacion = 70

if (puntuacion >= 70)
    console.log("Aprobado")
else
    console.log("Reprobado")

var dia = 1

switch (dia) {
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miercoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("Lunes")
        break    
}

function convertirFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

var temperaturaCelsius = 25
var temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log('Temperatura en Fahrenheit: ' + temperaturaFahrenheit)

function esPar(numero) {
    return numero % 2 === 0
}

var numeroPar = 3
if (esPar(numeroPar)) {
    console.log(numeroPar + ' es par')
}
else {
    console.log(numeroPar + ' es impar')
}