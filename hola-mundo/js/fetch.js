'use strict'

// FETCH (AJAX)-> Peticiones asincronas a api rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

// Promesa
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();
    }) // Este método devuelve una nueva promesa, podemos concatenar then
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
        return getInfo();
    })
    .then(data => {
        console.log(data);
    }) // Capturar errores
    .catch(error => {
        console.log(error);
    });

function getUsuarios() {
    return fetch("https://reqres.in/api/users");
}

function getJanet() {
    return fetch("https://reqres.in/api/users/2");
}

function getInfo() {
    var profesor = {
        nombre: "Fernando",
        apellidos: "Ramvil",
        url: "http://www.ferramvil.es",
    }
    // Creamos una promesa para leer archivos, enviar POST
    return new Promise((resolve, reject) => {
        var profesorString = JSON.stringify(profesor);
        if (typeof profesorString != "string") {
            var res = reject('error');
        } else {
            res = resolve(profesorString);
        }
        return res;
    })
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        div_usuarios.append(nombre);
        // Quitar span cargando
        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarJanet(user) {
    // Crea elementos para añadir al dom
    let nombre = document.createElement('h4');
    let avatar = document.createElement("img");
    // Recupera información del json para mostrarlo y modifica propiedades
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";
    // Añade elementos al dom
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    // Quitar span cargando
    document.querySelector("#janet .loading").style.display = "none";
}