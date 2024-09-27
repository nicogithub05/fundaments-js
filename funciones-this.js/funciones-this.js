function suma(a, b) {  // parametros
    return a + b;
}

console.log(suma(1, 4)); // argumentos

function calcularPrecio(originalPrice, discountPercentage) {
    const discount = (originalPrice * discountPercentage) / 100;
    const priceWithDiscount = originalPrice - discount;
    return priceWithDiscount
}

const originalPrice = 100;
const discountPercentage = 20; 
const finalPrice = calcularPrecio(originalPrice - discountPercentage);


console.log(`original price: $${originalPrice}`);
console.log(`discount: $${discountPercentage}%`);
console.log(`price with discount: $${finalPrice}`);


// funciones vs métodos. 

// todo en javascript es un objeto. 

// capacidades de las funciones: 

// funciones como argumentos: callbacks

function a() {

}

function b(a) {
    b(a);
}

function a() {
    function b() {
        return b
    }
}

// asignar funciones a variables 

let a = function() {
    console.log('soy una función dentro de una variable')
} // el nombre de la funcion queda como nombre de la variable. 

a();

// estas funciones pueden tener propiedades y métodos: 


let obj1 = {
    nombre: 'nicolas',
    apellido: 'valencia'
}

a.call(obj1); // método de una función que funciona como objeto (todo en javascript es un objeto);

function a() {
    function b() {
        function c() {

        }
        c();
    }
    b()
}

a(); 


// almacenar funciones en objetos: 

const rocket = {
    name: 'Falcon 9',
    launchMessage: function() { // funcion almacenada dentro de un objeto:
        console.log('El cohete se lanzó exitosamente')
    }
}

rocket.launchMessage();


// funciones puras vs impuras

// causas side effects = efectos secundarios -> Hace que las funciones dejen de ser puras
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM.
// 6. Obtener hora o día actual.

function sum(a, b) { // funcion pura: se reciben los mismos parámetros y obtenemos la misma salida. 
    return a + b;
}

function sum(a, b) {
    console.log(`a: ${a}`);
    return a + b; 
}


let total = 0;

function sumWithSideEffect(a) {
    total += a;
    return total;
}

// Funciones puras

function square(x) { 
    return x * x; 
}

function addTen(y) {
    return y + 10;
}

// funcion con funciones combinadas pero que sigue siendo pura

const number = 5; 
const finalResult = addTen(square(number))
console.log(finalResult);

// arrow functions & lexical bindings = Enlace léxico.

// nos permiten hacer funciones mas cortas
// nos permiten evitar el contexto de this. 
// con las arrow function el this hace referencia al objeto global

const greeting = function(name) {
    return `hi: ${name}`;
}

const newGreeting = (name) => { // arrow function con explicit return
    console.log(`hola me llamo ${name}`);
    return `hi: ${name}`
}

newGreeting('Nicolas');

const newGreetingWithTwoParameters = (name, lastName) => 
    console.log(`Hola, mi nombre es ${name} ${lastName}`);

newGreetingWithTwoParameters('Nicolas', 'Valencia')

// lexical bindings = Enlaces léxicos: 

// diferencia entre funcion normal y arrow function con lexical binding: 

const finctionalCharacter = {
    name: 'Uncle Ben', 
    messageWithTraditionalFunction: function(message) { // método del objeto functional character
        console.log(`${this.name} says: ${message} `)
    }, 
    messageWithArrowFunction: (message) => { // aquí this hace referencia al objeto global por lo que no manda el mensaje que es. 
        console.log(`${this.name} says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('Todo poder conlleva una responsabilidad');
finctionalCharacter.messageWithArrowFunction('Cuidado con el doctor Octopus');


