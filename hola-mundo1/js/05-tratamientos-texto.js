'use strict'
// Transformación de textos

var texto1 = "Bienvenidos al curso de JavaScritp";
var texto2 = "es un buen curso";


var busqueda = texto1.search("curso");
console.log(busqueda);

var coincidencia = texto1.match("curso");
console.log(coincidencia);
// Devuelve un array

// regex
var coincidencia2 = texto1.concat(texto2).match(/curso/g);
console.log(coincidencia2);