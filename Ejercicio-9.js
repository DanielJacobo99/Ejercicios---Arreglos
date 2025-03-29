//*Ejercicio 9: Filtrar palabras por longitud**//
let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"]

let PalabrasFiltradas = palabras.filter(palabras => palabras.length >=5 )
console.log("Las palabras que cumple con la condición son:", PalabrasFiltradas)