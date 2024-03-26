function sumar(numero1,numero2) { // Los parametros se colocan dentro de los ()
    console.log(numero1 + numero2);
}
// Los Argunmentos o Valores reales se colocan dentro de los ()
sumar(10, 10);
sumar(3, 10);
sumar(51, 19);
sumar(890, 80);
sumar(750, 584);

const sumar2 = function (n1, n2) {
    console.log(n1 + n2)
}
sumar2(58, 64);

// Parametros por default
// Estos se utilizan si alguna de nuestra variable le falte un valor se agrega el que le dimos por default
// esots se colocan con un = y el valor que le querramos colocar
function sumar3(numero1 = 0,numero2 = 0) {
    console.log(numero1 + numero2);
}
sumar3(10);

