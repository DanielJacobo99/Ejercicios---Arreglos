//*Ejercicio 2: Promedio sin extremos**//
let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5]
function promedioSinExtremos(notas) {
    return `Notas excluidas: ${Math.min(...notas)} y ${Math.max(...notas)}. 
    Promedio final: ${((notas.reduce((sum, nota) => sum + (nota !== Math.min(...notas) && nota !== Math.max(...notas) ? nota : 0), 0)) / (notas.length - 2)).toFixed(2)}`
}

console.log(promedioSinExtremos(notas))