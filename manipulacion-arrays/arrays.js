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

// map -> aplica una funcion a cada elemento del array y crea uno nuevo

const numbers2 = [1, 2, 3, 4, 5]
const squareNumbers = numbers2.map(num => num * num)

console.log(numbers2); // mantiene el array original
console.log(squareNumbers); // crea uno nuevo con la función que le mandamos.

// forEach 

// no crea un nuevo array 

const colors = ['Yellow', 'Red', 'Pink'];
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors);

// exercise farenheit to celsius conversion

const temperaturesFarenheit = [32, 68 , 95, 104, 212]; 
const temperaturesCelcius = temperaturesFarenheit.map(farenheit => (5/9) * (farenheit - 32));

console.log(temperaturesFarenheit);
console.log(temperaturesCelcius);

// exercise sum of elements in an array


const numeros = [1, 2, 3, 4, 5];
let suma = 0;  // Creamos una variable para guardar la suma

numeros.forEach(numero => {
    suma += numero;  // Cada número se va sumando a la variable suma
});

console.log('La suma total es:', suma);

// ---- filter y reduce

// filter -> crea un nuevo array con elementos que cumplan con la funcion. 

const numberss =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numberss.filter(number => number % 2 === 0); 
console.log(numberss);
console.log(evenNumbers);


// reduce  case 1-> Ejecuta una funcion reduvtora sobre cada elemento de un array devolviendo un único valor:

const numbersReduce = [1, 2, 3, 4, 5];

const summ = numbersReduce.reduce((accumm, currentValue) => accumm + currentValue, 0);

console.log(numbersReduce);
console.log(summ);

// reduce case 2 

const words = ['Apple', 'Banana', 'Hello', 'Bye', 'Banana', 'Apple'];

const wordFrequency = words.reduce((accumm, currentValue) => {
    if(accumm[currentValue]) {
        accumm[currentValue]++

    } else {
        accumm[currentValue] = 1;
    }
    return accumm
}, {})

console.log(wordFrequency);