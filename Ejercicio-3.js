//*Ejercicio 3: Valores positivos, negativos y ceros**//
let numeros = [0, -2, 5, 3, 0, -7, 9]

Contador = numeros.filter(numeros => numeros ===0).length
console.log("Contador de ceros:", Contador)

Contadorpositiva = numeros.filter(numeros => numeros > 0).length
console.log("Contador de Numeros positivo:", Contadorpositiva)

ContadorNegativo = numeros.filter(numeros => numeros < 0).length
console.log("Contador de Negativo:", ContadorNegativo)