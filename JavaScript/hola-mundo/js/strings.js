'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";

var replace = texto1.replace("JavaScript", "Python");
var slice = texto1.slice(10);
var split = texto1.split(" ");
var trim = texto1.trim();


// Plantillas
/*
var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

// var texto = "Mi nombre es: " + nombre + "</br> Mis apellidos son: " + apellidos;
var texto =
    `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}<h3>
    <h3>Mis apellidos son: ${apellidos}<h3>
    `;

document.write(texto);
*/

// Arrays
/*
var lenguajes = new Array("PHP", "Java", "JS");

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, arr) => {
    console.log("arr");
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>");
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
*/
// ArraysMultidimesionales

var categorias = ["Acción", "Terror", "Comedias"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

// Añadir elemento
peliculas.push("Batman");

// Eliminar último elemento 
peliculas.pop();

// Ordenación y orden inverso
peliculas.sort();
categorias.reverse();


// Buscar elemento y eliminar del array
var indice = peliculas.indexOf("Gran Torino");
if (indice > -1) {
    peliculas.splice(indice, 1);
}

// Convertir array a texto: La verdad duele, La vida es bella, Gran Torino
var pelistring = peliculas.join();

// Convertir string a cadena
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(",");

// Búsquedas
var busqueda = peliculas.find(function (peli) {
    return peli == "Gran Torino";
});
var busqueda2 = peliculas.find(peli => peli == "Gran Torino");
var busqueda3 = peliculas.findIndex(peli => peli == "Gran Torino");

var precios = [10, 20, 50, 80, 12];
var busqueda4 = precios.some(precio => precio > 20); // Buscar condición, return boolean
// Ordenar números en orden creciente, en orden decreciente "return b-a"
precios.sort(function (a, b) {
    return a - b;
});

console.log(cadena_array);
// console.log(cine);