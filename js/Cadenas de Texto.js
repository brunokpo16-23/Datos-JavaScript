//String o Cadena de Texto

const producto = "Monitor de 20 pulgadas"; // Esta es la mas común y utilizada
const producto1 = String("Monitor de 20 pulgadas"); // Esta  casi no se utiliza 
const producto2 = new String("Monitor de 20 pulgadas"); //  Esta  casi no se utiliza 
const producto3 = "Monitor de 20\"pulgadas"; // Si tenemos que usar "" dentro de otras "" podemos escapar poniendo \ antes como en el ejemplo

// Operaciones 
console.log(producto); // para inspeccionar la función en la consola 
console.log(producto.length); // Este nos muestra la cantidad de caracteres que tiene nuestra función 

// IndexOF 
//esto nos sirve para buscar una palabra dentro de nuestra función. 
// Si nos aparece un numero 0 o mayor es la posición en la que encontró la palabra, pero si nos aparece un numero negativo significa que no la encontró.
console.log(producto.indexOf("20"));


// Includes 
// Este es igual que el anterior solo que nos muestra verdadero o falso si encontró la palabra.
console.log(producto.includes("20"));

