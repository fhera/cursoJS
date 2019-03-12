// el modo estricto hace que tengas que poner var para declarar una variable... 
// Esto hace que tengas que cumplir con ES6
'use strict'

var pais = "España";
var continente = "Europa";
console.log(pais, continente);

// La diferecia con let y var es el ámbito/alcance en el que trabaja
// El ámbito de trabaja de let se restringe a local y var global 
let prueba = "hola";

// Constantes
const pi = 3.14;


let n1 = Number("33");
let n2 = parseInt("25.3");
let n3 = parseFloat("25.3");
let stringNumber = String(n3);

// Detectar el tipo
console.log(typeof (stringNumber));

// Bucle con debug
var numero = 100;
for (var i = 0; i <= numero; i++) {
    console.log(i);
    // debugger;
}