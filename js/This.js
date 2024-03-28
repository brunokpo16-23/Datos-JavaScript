// This
// Va a hacer referencia al objeto sobre el cual se esta mandando a llamar la función 
const reservación = {
    nombre: "Bruno",
    apellido: "Spinsanti",
    total: 5000,
    pagado: true,
    información: function() {
console.log(`El Cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es $${this.total}`)
    }
}

reservación.información()

// Otro ejemplo
const reservación2 = {
    nombre: "Juan",
    apellido: "Damiani",
    total: 5000,
    pagado: true,
    información: function() {
        console.log(`El Cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es $${this.total}`)
    }
}
reservación2.información()