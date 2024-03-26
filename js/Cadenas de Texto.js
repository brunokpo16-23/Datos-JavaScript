//String o Cadena de Texto

const producto = "Monitor de 20 pulgadas"; // Esta es la mas comun y utilizada
const producto1 = String("Monitor de 20 pulgadas"); // Esta  casi no se utiliza 
const producto2 = new String("Monitor de 20 pulgadas"); //  Esta  casi no se utiliza 
const producto3 = "Monitor de 20\"pulgadas"; // Si tenemos que usar "" dentro de otras "" podemos escapar poniendo \ antes como en el ejemplo

// Operaciones 
console.log(producto); // para inspeccionar la funcion en la consola 
console.log(producto.length); // Este nos muestra la cantidad de caracteres que tiene nuesta funcion 

// IndexOF 
//esto nos sirve para buscar una palabra dentro de nuestra funcion. 
// Si nos aparece un numero 0 o mayor es la posicion en la que encontro la palabra, pero si nos aparece un numero negativo significa que no la encontro.
console.log(producto.indexOf("20"));


// Includes 
// Este es igual que el anterior solo que nos muestra verdadero o falso si encontro la palabra.
console.log(producto.includes("20"));

