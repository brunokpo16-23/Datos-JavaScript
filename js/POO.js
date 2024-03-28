// Classes 
// Esta es la nueva forma de escribir que suplanta a prototype 
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    };

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un valor de $${this.precio}`
    };

    retornarPrecio() {
        return this.precio
    }
}

const producto2 = new Producto("Monitor Curvo de 49 Pulgadas", 800);
const producto3 = new Producto("Laptop", 300);
const producto4 = new Producto("Samsung s24", 2500);



console.log(producto2);
console.log(producto3);
console.log(producto4);

console.log(`El precio del producto ${producto2.nombre} es: $${producto2.precio}`); // Salida: El precio del producto Monitor Curvo de 49 Pulgadas es: $800
console.log(`El precio del producto ${producto3.nombre} es: $${producto3.precio}`); // Salida: El precio del producto Laptop es: $300
console.log(`El precio del producto ${producto4.nombre} es de $${producto4.precio}`)

//Herencias 
//Es una forma de pasar valores o atributos de un lugar a otro

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super (nombre, precio); //Solamente lo que existe dentro de la clase padre lo puedes colocar dentro de super.
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    };
}

const libro = new Libro(`Las 48 leyes del poder`, 150, "846531384351");
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());