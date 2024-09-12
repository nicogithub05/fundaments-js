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


// --- Operadores aritméticos ----

const entero = 20;
const decimal = 3.14; 
console.log(typeof entero, typeof decimal); // typeof = ver que tipo de dato es


// notación cientifica 

const cientifico = 12e3;

// números infinito y NaN.

const infini = Infinity;
const noEsNumero = NaN; 

// operaciones aritméticas. 

const suma = 1 + 1;
const resta = 1 - 1;
const multi = 2 * 1;
const divi = 5 / 2; 

// módulo y exponente

const modul = 6 % 2; // nos sirve para saber si un número es multiplo de otro. 
const exponente = 5 ** 2;

// precisión 

const result = 0.1 + 0.3; // aquí nos da un número muy largo. 
console.log(result.toFixed(1)); // nos permite definir cantidad de decimales que queremos usar. 
console.log(result === 0.4); 

// operaciones avanzadas 

const raiz = Math.sqrt(12);
console.log(raiz.toFixed);

const absoluto = Math.abs(-8)
console.log(absoluto);


const aleatorio = Math.random()
console.log(aleatorio);


// ----- conversión de tipos (Type casting y coertion)

// depende de si el lenguaje es interpretado o compilado. JS es interpretado. 

// JS tiene un chequeo de tipos dinámico.

// existen las coerciones implícitas (cuando lo convierte el lenguaje) y explícitas (cuando lo convertimos manualmente)





