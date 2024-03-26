//Este sirve para evaluar varias opciones a la vez
const métodoPago = "bitcoin";

switch (métodoPago) {
    case "tarjeta":
        console.log("Pagaste con Tarjeta");
        break;
    case "bitcoin":
        console.log("Pagaste con Bitcoin");
        break;
    case "transferencia":
        console.log("Pagaste con Transferencia");
        break;
    case "deposito":
        console.log("Pagaste con Deposito");
        break;
    default:
        console.log("Aun no has pagado")
}