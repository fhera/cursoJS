'use strict'

// JSON -> JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos',
};

// pelicula.titulo = "Superman Begins";

var peliculas = [
    {
        titulo: "La verdad duele",
        year: 2016,
        pais: "Francia",
    },
    pelicula,
]

// console.log(peliculas)

var cajaPeli = document.querySelector("#peliculas")
for (var index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
    cajaPeli.append(p);
}