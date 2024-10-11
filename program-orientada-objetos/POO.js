// anatomía de un objeto: 
 
// es una estructura donde podemos guardar cualquier tipo de dato
// function con la sintaxis key, value. 

const persona = {
    nombre: 'Nicolas',
    edad: 28,
    direccion: {
        calle: 'avenida sur 115',
        ciudad: 'Mexico'
    },
    saludar() {
        console.log(`Hola ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar(); // llamamos al método dentro del objeto persona

persona.telefono = '311 778 44 90';
console.log(persona.telefono);

persona.despedirse = () => {
    console.log(`Adios ${persona.nombre}`)
}

persona.despedirse();

delete persona.telefono; // con delete eliminamos propiedades de objeto
delete persona.despedirse;


console.log(persona)

// 2 --- Funciones constructoras 

function Persona(nombre, apellido, edad) {
    this.nombre = nombre; // this hace referencia al objeto Persona
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Nicolas', 'Valencia', 28);

console.log(persona1);

Persona.prototype.telefono = '555 555 5555';

Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre}`)
}

persona1.saludar();


// 3 ---- Clases 

// sugar sintax para que sea mas intuitivas las clases en JS

class Persona { // arquetipo de la clase
    constructor(name, lastName, age) {
        this.name = name; 
        this.lastName = lastName;
        this.age = age;
    }

    saludar() {
        console.log(`Hola, mi nombre es: ${this.name}`)
    }
}

const persona3 = new Persona("Nicolas", 'Valencia', 28) // instancia de esa clase

persona3.saludar() // metodo de la clase 

// 4 ----- prototipos y herencias

// cuando creamos el prototipo, las instancias que creemos van a heredar esa estructura para crear el objeto. 
// prototype solo funciona en clases y funciones constructoras.

class Animal { // molde de la clase para construir mas instancias
    constructor(nombre, tipo) {
        this.name = nombre;
        this.type = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}


class Perro  extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza; 
    }

    emitirSonido() {
        console.log("El perro ladra");
    }

    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("Noah", "Perro", "Pug");

console.log(perro1);

perro1.correr();

perro1.emitirSonido();

// prototipos 

perro1.nuevoMetodo = function () { // aquí solo se agrega el método a la instancia no a la clase
    console.log("este es un nuevo método")
};

perro1.nuevoMetodo();

Perro.prototype.segundoMetodo = function() { // el método solo se agrega a las clases constructoras, no a instancias
    console.log("este es un segundo método")
}

perro1.segundoMetodo();

// todas las clases pertenecen a el objeto global Object. Es una cadena de prototipos.
// perro1 tiene un protypo deribado de perro y la clase perro tiene un prototipo deribado de la clase Animal. 








