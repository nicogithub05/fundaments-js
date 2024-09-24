// operadores de comparación
/* 
 == -> valida que el valor sea el mismo
 === -> valida que el valor y el tipo de dato sea el mismo
!= -> Negación (si es diferente true, si es igual false);
!== diferente de -> Este valor es diferente al otro
>
<
>=
<=
*/


const a = 10;
const b = 20;
const c = "10";


console.log(a == b); //false
console.log(a == c); //true
console.log(a === b); // false

console.log(a != b); // true
console.log(a !== c); // true

console.log(a > b); //false

console.log(b >= a) // true


// ----- Operadores lógicos ---- //

// && y
// || or
// ! no

const d = 10;
const e = 20;
const f = "10";

console.log(d == e && d === f);

console.log(d != e || d === f)

console.log(!(d === f))


// ----- Estructuras condicionales ------- //

let nombre = 'Nicolas';

if(nombre === 'Nicolas') {
    console.log('Tu nombre es Nicolás');
} else if (nombre === 'Orlando') {
    console.log('Tu nombre es Orlando');
} else {
    console.log('Tu nombre no es Nicolás')
}

// Ejercicio: 

const numAlea = Math.floor(Math.random() * 10 + 1); 

const numeroJugador = parseInt(prompt('Adivina el número secreto entre 1 y 10'))
console.log(`El numero con el que juegas es: ${numeroJugador}`);

if(numeroJugador === numAlea) {
    console.log('El numero que elegiste es correcto.')
} else if(numeroJugador > numAlea){
    console.log('Número mayor: ingresa otro número')
} else {
    console.log('Númenor menor: ingresa otro número')
}

// ------ condicional switch 

let dia = 'tuesday'; 

switch(dia) {
    case 'monday': 
    console.log('Hy es lunes');
    break;
    case 'tuesday': 
    console.log('Hy es martes');
    break;
    case 'wednesday': 
    console.log('Hy es miercoles');
    break;
    case 'thusday': 
    console.log('Hy es jueves');
    break;
    case 'friday': 
    console.log('Hy es viernes');
    break;
    default: 
    console.log('Día no encontrado') 
}

// Condicional for 

let arr = ["eat", "sleep", "code", "repeat"];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// ciclo for of 

// se utilizan en objetos iterables -> Cuando se quiere acceder a elementos de una lista

// for of arrays, strings, [algo]

// for(var of objeto)


let canasta = ['peras', 'naranjas', 'uvas', 'bananos']

for(fruta of canasta) {
    console.log(fruta)
}

// ejercicio con for 

//Triángulo de asteriscos con ciclo for

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}