//Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log("Pausando...")
    },
    crearPlaylist : function(Nombre) {
        console.log(`Creando la Playlist: ${Nombre}`)
    },
    reproducirPlaylist : function(Nombre) {
        console.log(`Reproduciendo la Playlist: ${Nombre}`)
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("GYM A FONDO");
reproductor.reproducirPlaylist("GYM A FONDO");