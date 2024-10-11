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