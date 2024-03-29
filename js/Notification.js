const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
Notification.requestPermission()
.then(resultado => console.log(`El resultado es ${resultado}`))
})

if(Notification.permission == "granted") {
    new Notification ("Esta es una notificación", {
        icon: "img/Car Poster Prints.jpeg",
        body: "Porsche GT3 RS"
    })
}