//1 - celsius, 2 - kelvin, 3 - fahreith
var tempOrigin = 1
var tempDestino = 3
var temperatura = 36
var resultado = temperatura
if (tempOrigin == 1) {
    if (tempDestino == 2) {
        resultado = temperatura + 273
    } else if (tempDestino == 3) {
        resultado = (9 * temperatura + 160) / 5
    }
} else if (tempOrigin == 2) {
    if (tempDestino == 1) {
        resultado = (temperatura * 5 - 160) / 9
    } else if (tempDestino == 3) {
        resultado = temperatura * 5 - 160 / 9 + 273
    }
} else {
    if (tempDestino == 1) {
        resultado = temperatura - 273
    } else if (tempDestino == 2) {
        resultado = ((temperatura - 32) * 5) / 9 + 273
    }
}

console.log(resultado)