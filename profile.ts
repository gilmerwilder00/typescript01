import { Persona, Animal } from "./data";

let nombre: string = "Gilmer Wilder Cabrera García";
let edad: number = 27;
let hobby: string = "dibujar";
let mayorEdad: boolean = true;

let myself = {
  nombre,
  edad,
  hobby,
  mayorEdad,
};

// console.log(data);

let fam2: Persona = {
  nombre: "Anibal Cabrera",
  edad: 50,
  hobby: "Ver peliculas",
  mayorEdad: true,
};

let fam3: Persona = {
  nombre: "Clara García",
  edad: 47,
  hobby: "Cantar",
  mayorEdad: true,
};

let fam4: Persona = {
  nombre: "Jahaziel Cabrera",
  edad: 14,
  hobby: "Jugar videojuegos",
  mayorEdad: true,
};

// let family: Datos[] = [data, fam2, fam3, fam4];

let personas: Array<Persona> = [myself, fam2, fam3, fam4];

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
} else {
  console.log("La propiedad 'nombre' no está en el objeto persona.");
}

if ("apellido" in myself) {
  console.log("La propiedad 'apellido' está en el objeto persona.");
} else {
  console.log("La propiedad 'apellido' no está en el objeto persona.");
}

if ("edad" in myself) {
  console.log("La propiedad 'edad' está en el objeto persona.");
} else {
  console.log("La propiedad 'edad' no está en el objeto persona.");
}

if ("cumpleaños" in myself) {
  console.log("La propiedad 'cumpleaños' está en el objeto persona.");
} else {
  console.log("La propiedad 'cumpleaños' no está en el objeto persona.");
}


//  Actividad: Implementando el operador “Is”
console.log("\nUSO DE 'IS':");

// if ( nombre is string) {
//     console.log("La propiedad 'nombre' está en el objeto persona.");
//   } else {
//     console.log("La propiedad 'nombre' no está en el objeto persona.");
//   }

if (typeof nombre === "string") {
  console.log("La variable 'nombre' es de tipo 'string'.");
} else {
  console.log("La variable 'nombre' no es de tipo 'string'.");
}

// Funcion de guardia de tipo
function esPersona(obj: any): obj is Persona {
  return typeof obj.nombre === "string" && typeof obj.edad === "number";
//   return typeof obj.nombre === "string" && typeof obj.edad === "number";
}

const mascota: Animal = { nombre: "Firulais", edad: '5' };

if (esPersona(myself)) {
  console.log("El objeto 'myself' es una persona.");
} else {
  console.log("El objeto 'myself' no es una persona.");
}

if (esPersona(mascota)) {
  console.log("El objeto 'mascota' es una persona.");
} else {
  console.log("El objeto 'mascota' no es una persona.");
}




// Actividad: Implementando el uso de “Generics” I
console.log("\nUSO DE GENERICS I:");
// Arreglo de Personas (personas)

// Arreglo de nombres
const nombres:string[] = ["Gilmer", "Jahaziel", 'Leslie'];

function obtenerPrimerElemento<T>(array: T[]): T {
    // se retorna el primer elemento 
    return array[0];
}

const primeraPersona = obtenerPrimerElemento(personas);
const primerNombre = obtenerPrimerElemento(nombres);

console.log("Primer elemento de personas:");
console.log(primeraPersona); 
console.log("Primer elemento de nombres:");
console.log(primerNombre);


// Actividad: Implementando el uso de “Generics” I
console.log("\nUSO DE GENERICS II:");
// Arreglo de Personas (family)

class Portfolio<T> {
    // La palabra clave private en TypeScript se utiliza para restringir el acceso a una propiedad o método de una clase, permitiendo que solo sean accesibles desde dentro de la propia clase.
    private items: T[] = [];

    // Método para agregar un elemento al portafolio :void el método no devuelve ningún valor
    add(item: T): void {
        // this se refiere a la instancia específica de Portfolio
        this.items.push(item);
    }

    // Método para obtener el primer elemento del portafolio
    getFirst(): T {
        return this.items[0];
    }

    // Método específico para sumar elementos numéricos
    sum(): number {
        // as number[] es una aserción de tipo que indica al compilador que, en este contexto específico, this.items debe tratarse como un array de números (number[]).
        return (this.items as number[] ).reduce((acc, item) => acc + item, 0);
    }

    // Método específico para concatenar elementos de texto
    concatenate(): string {
        return (this.items as string []).join(''); 
    }

    getItems(): T[] {
        return [...this.items]; // Devolver una copia para proteger los datos internos
    }
}


const portfolioNumerico = new Portfolio<number>(); // []
portfolioNumerico.add(10); //primero [10]
portfolioNumerico.add(20); //segundo [10, 20]
portfolioNumerico.add(30); //tercero [10, 20, 30]

console.log("PORTAFOLIO NUMERICO:")
// console.log(portfolioNumerico.items);
console.log(portfolioNumerico.getItems());
console.log(portfolioNumerico.getFirst()); 
console.log(portfolioNumerico.sum());   



console.log("PORTAFOLIO TEXTUAL:")
const portfolioTextual = new Portfolio<string>(); []
portfolioTextual.add("Hola"); //primero  ['Hola']
portfolioTextual.add(" "); // segundo    ['Hola', ' ']
portfolioTextual.add("Mundo"); //tercero ['Hola', ' ', 'Mundo']

// console.log(portfolioNumerico.items);
console.log(portfolioTextual.getItems());
console.log(portfolioTextual.getFirst());     
console.log(portfolioTextual.concatenate()); 