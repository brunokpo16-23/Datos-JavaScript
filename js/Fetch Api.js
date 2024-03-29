//Este sirve para extraer datos de base de datos 

function obtenerEmpleados() {
    const archivo = "empleados.json";

    fetch(archivo)
        .then(resultado => resultado.json())

        .then(datos => {
            // console.log(datos);
            const {
                empleados
            } = datos;
            // console.log(empleados)

            empleados.forEach(empleado => {
                console.log(empleado)
            })
        })
}

obtenerEmpleados();