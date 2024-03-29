// En los Promises existen 3 valores
//Pending: No se ha cumplido pero tampoco rechazado 
//Fulfilled: Ya se cumplió 
//Reject: Se rechazo o no se pudo cumplir 

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve("Usuario autenticado");
    } else {
        reject("No se puedo iniciar sesión");
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch(error => console.log(error))