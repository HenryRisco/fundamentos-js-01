let hora = 11

if(hora < 12) {
    console.log('Buenos días')
} else if(hora < 18) {
    console.log('Buenas tardes')
} else {
    console.log('Buenas noches')
}

function esMayorDeEdad(edad) {
    const edadInteresado = edad >= 18 ? 'true' : 'false'
    console.log(edadInteresado)
}

let edad = 18
esMayorDeEdad(edad)

function esVocal(letra) {
    const vocales = 'aeiouAEIOU'
    return vocales.includes(letra)
}

const letraCaracter = 'P'

if(esVocal(letraCaracter)) {
    console.log(letraCaracter + ' es una vocal')
} else {
    console.log(letraCaracter + ' no es una vocal')
}