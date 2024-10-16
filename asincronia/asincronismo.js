// 1 ---- promesas

// nos permite hacer codigo asíncrono
// tienen 3 estados: pending, fullfilled, rejected
// callbacks: resolve y reject


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if(operationSuccessful) {
            resolve("la operacion ha sido exitosa")
        } else {
            reject('Fallo la operacion')
        }
    }, 2000);
})

promise
    .then((successmessage) => {
        console.log(successmessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })


// 2 ----- Async y await

// function fetchData() {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }


async function fetchData() {
    //try / catch
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

// 3 ----- For await of 

// se utiliza cuando necesitamos más de una petición.

const urls = [
    "https://rickandmortyapi.com/api/character",   
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
        }
    } catch(error) {
        console.log(error)
    }
}