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







