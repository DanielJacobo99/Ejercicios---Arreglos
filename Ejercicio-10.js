//* Ejercicio 10: Calcular el promedio excluyendo valores extremos *//
let valores = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];

function calcularPromedioSinExtremos(arreglo) {
    let valorMinimo = Math.min(...arreglo);
    let valorMaximo = Math.max(...arreglo);

    let sumaValoresFiltrados = arreglo.reduce((acumulador, valor) => {
        if (valor !== valorMinimo && valor !== valorMaximo) {
            return acumulador + valor;
        }
        return acumulador;
    }, 0);

    let cantidadValoresFiltrados = arreglo.length - 2;

    let promedioFinal = (sumaValoresFiltrados / cantidadValoresFiltrados).toFixed(2);

    return `Valores excluidos: ${valorMinimo} y ${valorMaximo}. 
    Promedio final: ${promedioFinal}`;
}

console.log(calcularPromedioSinExtremos(valores));