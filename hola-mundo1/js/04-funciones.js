'use strict'

// Funciones

function calculadora() {
    return "Calculadora";
}

console.log(calculadora());

// Parámetros REST y SPREAD
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log(`Fruta1: ${fruta1}`);
    console.log(`Fruta2: ${fruta2}`);
    console.log(`${resto_de_frutas}`);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melón");

var frutas = ["Naranja", "Manzana"]; // SPREAD
listadoFrutas(...frutas, "Sandia", "Melón");

// Funciones anónimas: se usa para hacer callbacks
var pelicula = function (nombre) {
    return `La película es ${nombre}`;
}

function sumame(n1, n2, sumaYmuestra, sumaPorDos) {
    var sumar = n1 + n2;
    // Funciones callbacks
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7,
    function (dato) {
        console.log("La suma es:", dato);
    },
    function (dato) {
        console.log("La suma por dos es:", (dato * 2));
    });

// Funciones flecha
sumame(5, 7,
    dato => {
        console.log("La suma es:", dato);
    },
    dato => {
        console.log("La suma por dos es:", (dato * 2));
    });