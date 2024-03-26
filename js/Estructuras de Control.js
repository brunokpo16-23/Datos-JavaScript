// Estas sirven para escribir estructuras de control que revisan si una condición se cumple o no 

const puntaje = 1000;
// Esta revisa que se cumpla la condición para entregar el código, de lo contrario no lo entregara 
if (puntaje == 1000) {
    console.log("Si el puntaje es 1000")
} else {
    console.log("No es igual")
} // El ELSE sirve para mostrar un mensaje si no es igual

// Un signo = significa que se le asigna una variable, cuando son 2 es una comparación, si son 3 este es mas estricto y revisara que ademas de ser el mismo valor sea si es un stream o no.

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log("El usuario puede pagar")
} else {
    console.log("Dinero insuficiente")
}

//Si quieres revisar mas de una condición se utiliza ELSE IF
const rol = "Editor"

if (rol === "Administrador") {
    console.log("Acceso a todo el sistema");
} else if (rol === "Editor") {
    console.log("Ingresaste como editor, tienes acceso restringido")
} else {
    console.log("No tiene acceso");
}
