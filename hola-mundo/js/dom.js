'use strict'
// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.color = color;
}

/**  Conseguir elementos con id concreto */

// var caja = document.getElementById("micaja");
// Como si fuera un css, micaja => etiqueta; #micaja => id; .micaja => class
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola";


/**  Conseguir elementos por su etiqueta */
var todosLosDivs = document.getElementsByTagName("div");

// todosLosDivs.forEach((element, index) => {
for (let valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        parrafo.appendChild(document.createTextNode(todosLosDivs[valor].textContent));
        document.querySelector("#mysection").appendChild(parrafo);
    }
}

/**  Conseguir elementos por su clase */
var divsRojos = document.getElementsByClassName("rojo");
for (var div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";

    }
}
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";