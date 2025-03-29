//*Ejercicio 5: Secuencia ascendente**//
let secuencia = [2, 4, 6, 6, 9]
let otra = [5, 3, 8]

function verificarOrdenAscendente(secuencia) {
    for (let i = 1; i < secuencia.length; i++) {
        if (secuencia[i] < secuencia[i - 1]) {
            return "❌ no válido"
        }
    }
    return "✅ válido"
}
console.log(`Arreglo: [${secuencia}] - ${verificarOrdenAscendente(secuencia)}`);
console.log(`Arreglo: [${otra}] - ${verificarOrdenAscendente(otra)}`)