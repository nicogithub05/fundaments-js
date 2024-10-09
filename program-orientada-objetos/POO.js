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












