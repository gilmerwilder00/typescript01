"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Gilmer Wilder Cabrera García";
var edad = 27;
var hobby = "dibujar";
var mayorEdad = true;
var myself = {
    nombre: nombre,
    edad: edad,
    hobby: hobby,
    mayorEdad: mayorEdad,
};
// console.log(data);
var fam2 = {
    nombre: "Anibal Cabrera",
    edad: 50,
    hobby: "Ver peliculas",
    mayorEdad: true,
};
var fam3 = {
    nombre: "Clara García",
    edad: 47,
    hobby: "Cantar",
    mayorEdad: true,
};
var fam4 = {
    nombre: "Jahaziel Cabrera",
    edad: 14,
    hobby: "Jugar videojuegos",
    mayorEdad: true,
};
// let family: Datos[] = [data, fam2, fam3, fam4];
var personas = [myself, fam2, fam3, fam4];
// console.log(family);
// Actividad: Implementando el operador “Typeof”
console.log("\nUSO DE TYPEOF:");
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof hobby);
console.log(typeof mayorEdad);
// Actividad: Implementando el operador “In”
console.log("\nUSO DE 'IN':");
if ("nombre" in myself) {
    console.log("La propiedad 'nombre' está en el objeto persona.");
}
else {
    console.log("La propiedad 'nombre' no está en el objeto persona.");
}
if ("apellido" in myself) {
    console.log("La propiedad 'apellido' está en el objeto persona.");
}
else {
    console.log("La propiedad 'apellido' no está en el objeto persona.");
}
if ("edad" in myself) {
    console.log("La propiedad 'edad' está en el objeto persona.");
}
else {
    console.log("La propiedad 'edad' no está en el objeto persona.");
}
if ("cumpleaños" in myself) {
    console.log("La propiedad 'cumpleaños' está en el objeto persona.");
}
else {
    console.log("La propiedad 'cumpleaños' no está en el objeto persona.");
}
//  Actividad: Implementando el operador “Is”
console.log("\nUSO DE 'IS':");
// Forma incorrecta
// if ( nombre is string) {
//     console.log("La propiedad 'nombre' está en el objeto persona.");
//   } else {
//     console.log("La propiedad 'nombre' no está en el objeto persona.");
//   }
if (typeof nombre === "string") {
    console.log("La variable 'nombre' es de tipo 'string'.");
}
else {
    console.log("La variable 'nombre' no es de tipo 'string'.");
}
// Funcion de guardia de tipo
function esPersona(obj) {
    return typeof obj.nombre === "string" && typeof obj.edad === "number";
    //   return typeof obj.nombre === "string" && typeof obj.edad === "number";
}
var mascota = { nombre: "Firulais", edad: '5' };
if (esPersona(myself)) {
    console.log("El objeto 'myself' es una persona.");
}
else {
    console.log("El objeto 'myself' no es una persona.");
}
if (esPersona(mascota)) {
    console.log("El objeto 'mascota' es una persona.");
}
else {
    console.log("El objeto 'mascota' no es una persona.");
}
// Actividad: Implementando el uso de “Generics” I
console.log("\nUSO DE GENERICS I:");
// Arreglo de Personas (personas)
// Arreglo de nombres
var nombres = ["Gilmer", "Jahaziel", 'Leslie'];
function obtenerPrimerElemento(array) {
    // se retorna el primer elemento 
    return array[0];
}
var primeraPersona = obtenerPrimerElemento(personas);
var primerNombre = obtenerPrimerElemento(nombres);
console.log("Primer elemento de personas:");
console.log(primeraPersona);
console.log("Primer elemento de nombres:");
console.log(primerNombre);
// Actividad: Implementando el uso de “Generics” II
console.log("\nUSO DE GENERICS II:");
// Arreglo de Personas (family)
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        // La palabra clave private en TypeScript se utiliza para restringir el acceso a una propiedad o método de una clase, permitiendo que solo sean accesibles desde dentro de la propia clase.
        this.items = [];
    }
    // Método para agregar un elemento al portafolio :void el método no devuelve ningún valor
    Portfolio.prototype.add = function (item) {
        // this se refiere a la instancia específica de Portfolio
        this.items.push(item);
    };
    // Método para obtener el primer elemento del portafolio
    Portfolio.prototype.getFirst = function () {
        return this.items[0];
    };
    // Método específico para sumar elementos numéricos
    Portfolio.prototype.sum = function () {
        // as number[] es una aserción de tipo que indica al compilador que, en este contexto específico, this.items debe tratarse como un array de números (number[]).
        return this.items.reduce(function (acc, item) { return acc + item; }, 0);
    };
    // Método específico para concatenar elementos de texto
    Portfolio.prototype.concatenate = function () {
        return this.items.join('');
    };
    Portfolio.prototype.getItems = function () {
        return __spreadArray([], this.items, true); // Devolver una copia para proteger los datos internos
    };
    return Portfolio;
}());
var portfolioNumerico = new Portfolio(); // []
portfolioNumerico.add(10); //primero [10]
portfolioNumerico.add(20); //segundo [10, 20]
portfolioNumerico.add(30); //tercero [10, 20, 30]
console.log("PORTAFOLIO NUMERICO:");
// console.log(portfolioNumerico.items);
console.log(portfolioNumerico.getItems());
console.log(portfolioNumerico.getFirst());
console.log(portfolioNumerico.sum());
console.log("PORTAFOLIO TEXTUAL:");
var portfolioTextual = new Portfolio();
[];
portfolioTextual.add("Hola"); //primero  ['Hola']
portfolioTextual.add(" "); // segundo    ['Hola', ' ']
portfolioTextual.add("Mundo"); //tercero ['Hola', ' ', 'Mundo']
// console.log(portfolioNumerico.items);
console.log(portfolioTextual.getItems());
console.log(portfolioTextual.getFirst());
console.log(portfolioTextual.concatenate());
