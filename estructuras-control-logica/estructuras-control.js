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





