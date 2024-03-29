//Este funciona como un priorizando, por ejemplo si una acción tarda algunos minutos le podemos decir que mientras tanto siga cargando el resto del sitio.
function descagarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... Espere un instante...");
        setTimeout(() => {
            resolve("Los clientes fueron cargados")
        }, 5000);
    })
}

function descagarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos... Espere un instante...");
        setTimeout(() => {
            resolve("Los pedidos fueron cargados")
        }, 3000);
    })
}

//Para decirle a una función que tiene que ser Asynck-Await debemos agregarle async delante de la función y luego await delante de la función que estamos llamando 

async function app() {
    try {
        //Con esta solo se mostraran los elementos una vez terminen de cargar, si agregamos varios cargara uno y luego el otro demorando aun mas
        // const clientes = await descagarNuevosClientes();
        // console.log(clientes);

        //Con esta sintaxis podremos ejecutar varios Asynck/Await sin que cargue uno y luego el otro, sino que lo hagan y se muestren cada uno a su tiempo
        const resultado = await Promise.all([descagarNuevosClientes(), descagarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1])
    } catch (error) {
        console.log("app lista");
    }
}

app();

//Luego de esto todo el código que escribamos no va a depender de si se completa o no lo anterior 