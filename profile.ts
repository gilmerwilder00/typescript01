import { Datos } from "./data";

let nombre: string = "Gilmer Wilder Cabrera García";
let edad: number = 27;
let hobby: string = "dibujar";
let mayorEdad: boolean = true;


let data = { 
    nombre, 
    edad, 
    hobby, 
    mayorEdad 
};

console.log(data);


let fam2: Datos = {
    nombre: "Anibal Cabrera",
    edad: 50,
    hobby: 'Ver peliculas',
    mayorEdad: true
}

let fam3: Datos = {
    nombre: "Clara García",
    edad: 47,
    hobby: 'Cantar',
    mayorEdad: true
}

let fam4: Datos = {
    nombre: "Jahaziel Cabrera",
    edad: 14,
    hobby: 'Jugar videojuegos',
    mayorEdad: true
}

// let family: Datos[] = [data, fam2, fam3, fam4];

 let family : Array<Datos>  = [data, fam2, fam3, fam4];


console.log(family);

