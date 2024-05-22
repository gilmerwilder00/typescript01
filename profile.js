"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Gilmer Wilder Cabrera García";
var edad = 27;
var hobby = "dibujar";
var mayorEdad = true;
var data = {
    nombre: nombre,
    edad: edad,
    hobby: hobby,
    mayorEdad: mayorEdad
};
console.log(data);
var fam2 = {
    nombre: "Anibal Cabrera",
    edad: 50,
    hobby: 'Ver peliculas',
    mayorEdad: true
};
var fam3 = {
    nombre: "Clara García",
    edad: 47,
    hobby: 'Cantar',
    mayorEdad: true
};
var fam4 = {
    nombre: "Jahaziel Cabrera",
    edad: 14,
    hobby: 'Jugar videojuegos',
    mayorEdad: true
};
// let family: Datos[] = [data, fam2, fam3, fam4];
var family = [data, fam2, fam3, fam4];
console.log(family);
