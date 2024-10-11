
const userDataBase = [
    {
        username: "estefany",
        timeLine: "123"
    },
    {
        username: "andres",
        password: "123"
    },
    {
        username: "oscar",
        password: "123"
    },
    {
        username: "mariana",
        password: "123"
    },
]

const userTimeLine = [
    {
        username: "estefany",
        timeLine: "Me encanta JavaScript"
    },
    {
        username: "oscar",
        timeLine: "Debeloper es lo mejor!"
    },
    {
        username: "mariana",
        timeLine: "A mi me gusta mas el cáfe que el té"
    },
    {
        username: "andres",
        timeLine: "Ya no quiero trabajar"
    },
]


const username = prompt('Ingrese su usuario');
const password = prompt('Ingrese su contraseña');

function usuarioExistente(username, password) {
    for(let i = 0; i < userDataBase.length; i++) {
        if(
            userDataBase[i].username === username &&
            userDataBase[i].password === password
        ) {
            return true
        }
    }
    return false
}

function signIn(username , password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(userTimeLine);
    } else {
        alert('Contraseña o usuario incorrectos');
    }
}

signIn(username, password);