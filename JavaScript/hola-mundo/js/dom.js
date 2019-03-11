'use strict'
// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.color = color;
}


// var caja = document.getElementById("micaja");
// Como si fuera un css, micaja => etiqueta; #micaja => id; .micaja => class
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola";



console.log(caja);