'use strict'

// LocalStorage -> memoria del navegador que se conserva si no se cierra

// Comprobar compatibilidad
if (typeof (Storage) != undefined) {
    console.log("LocalStorage disponible");
} else {
    console.log("Incompatible localStorage");
}

// Guardar datos en localstorage
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento para mostrarlo en la web
var titulo = localStorage.getItem("titulo");

// console.log(titulo);
document.querySelector("#peliculas").innerHTML = titulo;

// Guardar objetos
var usuario = {
    nombre: "Fernando",
    email: "fer@nando.es",
    web: "www.fernando.es",
};

// Tenemos que convertir de json a jsonString
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto

var userJS = JSON.parse(localStorage.getItem("usuario"));
document.querySelector("#peliculas").append(" " + userJS.web);
console.log(userJS);

// Borra elemento
// localStorage.removeItem("usuario");

// Borra todos los elementos
// localStorage.clear();

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener("submit", () => {
    var titulo = document.querySelector("#addPelicula").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});
