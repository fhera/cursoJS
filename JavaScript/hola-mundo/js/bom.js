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

// Onload: para cargar todo antes de inicializar el body esto cuando el script está en el head
window.addEventListener('load', () => {
    /////////////
    // Eventos //
    /////////////
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
        // this equivale al elemento que le estoy haciendo click
        this.style.border = "10px solid black"
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
    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("Focus: Estás dentro del input");
    });


    // Blur
    input.addEventListener('blur', function () {
        console.log("Blur: Estás fuera del input");
    });

    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log("Keydown: Estás pulsando esta tecla " + String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function (event) {
        console.log("Keypress: Tecla presionada " + String.fromCharCode(event.keyCode));
    });

    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log("Keyup: Tecla soltada " + String.fromCharCode(event.keyCode));
    });

    ////////////
    // Timers //
    ////////////
    // Se ejecuta cada x tiempo
    // setInterval(function () {
    //     console.log("Set interval ejecutado");
    //     if(document.querySelector("h1").style.fontSize == "50px"){
    //         document.querySelector("h1").style.fontSize = "30px";
    //     } else {
    //         document.querySelector("h1").style.fontSize = "50px";
    //     }
    // }, 5000); // cada 3s
    // Sólo se ejecuta una vez
    var tiempo = setInterval(function () {
        console.log("Set interval ejecutado");
        if (document.querySelector("h1").style.fontSize == "50px") {
            document.querySelector("h1").style.fontSize = "30px";
        } else {
            document.querySelector("h1").style.fontSize = "50px";
        }
    }, 5000); // cada 3s

    var stop = document.querySelector("#stop");

    stop.addEventListener('click', () => {
        clearInterval(tiempo);
    })


})