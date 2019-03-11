'use strict'

// BOM - Browser Object Model

function getBom() {
    console.log(window.innerWidth); // anchura
    console.log(window.innerHeight); // altura
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location); // Objeto para sacar un monto de props, como la url
}

function redirect(url) {
    window.location.href = url;
}

/** Abre una pestaña o ventana */
function abrirVentana(url) {
    window.open(url, "", "width=400,heigth=300");
}

// getBom();

// Eventos
// Eventos del ratón
function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
}
var boton = document.querySelector("#boton");
// click
boton.addEventListener('click', function () {
    cambiarColor();
});

// Mouse over
boton.addEventListener('mouseover', function () {
    boton.style.background = "#ccc";
});

// Mouseout
boton.addEventListener('mouseout', function () {
    boton.style.background = "black";
});

// Eventos del teclado

