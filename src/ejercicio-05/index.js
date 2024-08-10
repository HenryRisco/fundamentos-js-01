let mes = 7

switch(mes) {
    case 12:
    case 1:
    case 2:
        console.log('Inviero')
        break
    case 3:
    case 4:
    case 5:
        console.log('Primavera')
        break
    case 6:
    case 7:
    case 8:
        console.log('Verano')
        break
    case 9:
    case 10:
    case 11:
        console.log('Otoño')
        break
    default:
        console.log('Mes inválido')    
}

function calcularDiasMes(mes) {
    switch(mes) {
        case 2:
            console.log('Este mes tiene 28 días')
            break
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('Este mes tiene 30 días')
            break        
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('Este mes tiene 31 días')
            break
        default:
            console.log('Mes inválido') 
    }
}

let mesEspecifico = 1
console.log(calcularDiasMes(mesEspecifico))