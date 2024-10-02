// arrays -> objeto que nos permiten almacenar diferentes tipos de datos

// 1. new Array() or Array() 

const fruits = ['Manzana', 'Banano', 'Naranja']
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber) // array con 12 espacios vacíos

const number = Array(1, 2, 3, 4, 5)
console.log(number) // [1, 2, 3, 4, 5]

// 2. Array literal syntax

const oneNumber = [1, 2, 3, 4] 

const emptyArra = []; // array vacío

const sports = ['Tennis', 'Soccer', 'Ping pong'];

const recipeIngredients = [ // puede contener cualquier tipo de dato
    'Flour',
    true, 
    23,
    {
        ingredient: 'milk',
        quantity: '2L'
    },
    false
]

// accesing array elements 

const firstFruit = fruits[0]; // indice del array, comienza en 0
console.log(firstFruit);

// length property 

const arraLeng = fruits.length; // cantidad del elementos del array
console.log(arraLeng);


// ------ 2. Mutability & inmutability  

// los arrays tienen métodos. 

// agrega y muta el array original
const newFruit = fruits.push('watermelon');
console.log(newFruit);

// crea un nuevo array (inmutable)

const newFruits = fruits.concat('Uva', 'Fresa');
console.log(fruits); // queda el array original
console.log(newFruits); // nuevo array creado

// no todos los métodos modifican el array original

// checking array - saber si es un array

const isArra = Array.isArray(fruits);
console.log(isArra);
// true 

// practical exercise: sum all elements of an array

const numbers = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum); // 15


// métodos push - pop.
// modifican el array original (mutabilidad)

const countries = ['Colombia', 'USA', 'Canada'];
const newCountries = countries.push('Bolivia'); // agrega elemento al final
console.log(countries); // [ 'Colombia', 'USA', 'Canada', 'Bolivia' ]

const removeCountry = countries.pop(); // remueve el último elemento
console.log(countries);

