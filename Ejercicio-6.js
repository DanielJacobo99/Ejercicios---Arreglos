//* Ejercicio 6: Intercalar dos arreglos *//
let letras = ["a", "b", "c"];
let numeros = [1, 2, 3];

function intercalarArreglos(arreglo1, arreglo2) {
  return arreglo1.flatMap((elemento, indice) => [elemento, arreglo2[indice]]);
}

let arregloIntercalado = intercalarArreglos(letras, numeros);
console.log(arregloIntercalado);