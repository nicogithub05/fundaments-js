/* Variables - Que sean descriptivas y evitar ambiguedades */

let cajaDeAndy = 'Woody';
const juguetesDeAndy = 'Cara de papa' 
// declaracion     asignación 

console.log(cajaDeAndy);

// es importante añadir comentarios descriptivos de lo que se está haciendo. 

// las variables deben ir al inicio de todo el código. 

let contador = 0; 
contador = contador + 1; 

const pi = 3.14; 

console.log(Math.PI);

// tipos de datos: 

// --- primitivos 
let cadenaTexto = ' ';
let numero = 28;
let booleano = true || false; 
let nulo = null;
let indefinido = undefined;
let symbol = Symbol('Unico');
let enteroGrande = 2n; // bigInt

// ---- complejos

let objeto = new Object();
let array = new Array();
function persona() {
    console.log('soy una función')
}

let objetoUno = {
    persona: 'Hombre',
    edad: 23
}

let arrayUno = [1,2,3,4,5]

let string1 = 'Hola'
let string2 = 'mundo'

let concat = `${string1} ${string2}`;
console.log(concat); 

let numeroCaracteres = string1.length; // saber cantidad de caracteres
console.log(numeroCaracteres);

// una vez decidida las comillas que vamos a utilizar, usar las mismas para todo el programa.

let mayus = string1.toLowerCase();
let minus = string2.toUpperCase();

console.log(mayus, minus);

let fraseLarga = 'Hola, me encanta Javascript';
let subStr = fraseLarga.substring(17, 27)
console.log(subStr)
