//* Ejercicio 7: Contar vocales por palabra *//
let listaPalabras = ["computadora", "mesa", "silla", "mouse"];

function contarVocalesPorPalabra(arregloPalabras) {
  arregloPalabras.forEach((palabra) => {
    let cantidadVocales = palabra
      .split("")
      .filter((letra) => "aáeéiíoóuú".includes(letra)).length;
    console.log(`"${palabra}" tiene ${cantidadVocales} vocales.`);
  });
}

contarVocalesPorPalabra(listaPalabras);