
const calcularDiferencia = (primeraCantidad, segundaCantidad) =>
    primeraCantidad - segundaCantidad;
function recomendarExperiencia(opcion) {
    if (opcion === "1") {
        return "Espejo Mágico";
    }

    if (opcion === "2") {
        return "Cabina 360";
    }

    if (opcion === "3") {
        return "Espejo Mágico + Cabina 360";
    }

    return "";
}
function obtenerPrecioServicio(opcion) {
    if (opcion === "1") {
        return 3900;
    }

    if (opcion === "2") {
        return 3200;
    }

    if (opcion === "3") {
        return 6500;
    }

    return 0;
}


function evaluarPresupuesto(presupuesto, precio, servicio, nombreCliente, tipoEvento) {

    if (!(presupuesto > 0)) {
        alert("Ingresa un presupuesto válido mayor a $0.");
        return;
    }

    if (presupuesto >= precio) {
        const restante = calcularDiferencia(presupuesto, precio);

        alert(
            "Hola " + nombreCliente +
            ", para tu " + tipoEvento +
            " te recomendamos " + servicio +
            ". Su precio es $" + precio +
            " MXN y está dentro de tu presupuesto." +
            " Te sobran $" + restante + " MXN."
        );

    } else {
        const faltante = calcularDiferencia(precio, presupuesto);

        alert(
            "Hola " + nombreCliente +
            ", para tu " + tipoEvento +
            " te recomendamos " + servicio +
            ". Su precio es $" + precio +
            " MXN. Te faltan $" + faltante +
            " MXN para contratarlo."
        );
    }
}

function procesarExperiencia(opcion, nombreCliente, tipoEvento) {
    const servicio = recomendarExperiencia(opcion);
    const precio = obtenerPrecioServicio(opcion);

    if (precio === 0) {
        alert("Opción no válida. Intenta nuevamente.");
        return;
    }

    let presupuesto = 0;
    let respuesta = "";

    while (respuesta !== null && !(presupuesto > 0)) {
        respuesta = prompt("¿Qué presupuesto destinarías a esta experiencia?");

        if (respuesta !== null) {
            presupuesto = Number(respuesta);

            if (!(presupuesto > 0)) {
                alert("Ingresa un presupuesto válido mayor a $0.");
            }
        }
    }

    if (presupuesto > 0) {
        evaluarPresupuesto(
            presupuesto,
            precio,
            servicio,
            nombreCliente,
            tipoEvento
        );
    }
}

const servicios = [
    "Espejo Mágico",
    "Cabina 360",
    "Teléfono de mensajes",
    "Espejo Selfie",
    "Paquete"
];
function administrarCatalogo() {
    servicios.push("Corazón LED");
    servicios.unshift("Cabina Inflable");
    const servicioEliminado = servicios.pop();
    console.log("Servicio eliminado: " + servicioEliminado);
    servicios.splice(0, 1, "Cabina de fotos inflable");

    console.log("Catálogo actualizado correctamente.");
}

function listarServicios(lista) {
    let mensaje = "CATÁLOGO FESTIV\n";
    mensaje += "(Incluye servicios en desarrollo)\n\n";

    for (const servicio of lista) {
        mensaje += "• " + servicio + "\n";
        console.log("Servicio: " + servicio);
    }

    return mensaje;
}

function consultarCatalogo() {

    alert(listarServicios(servicios));

    const busqueda = prompt(
        "¿Qué servicio deseas buscar?\n" +
        "Puedes escribir una palabra, por ejemplo: espejo"
    );

    if (busqueda === null || busqueda.trim() === "") {
        return;
    }

    const textoBuscado = busqueda.trim().toLowerCase();
    let servicioEncontrado = "";
    for (const servicio of servicios) {
        if (
            servicioEncontrado === "" &&
            servicio.toLowerCase().includes(textoBuscado)
        ) {
            servicioEncontrado = servicio;
        }
    }
    if (servicios.includes(servicioEncontrado)) {
        const posicion = servicios.indexOf(servicioEncontrado);

        alert(
            "Servicio encontrado: " + servicioEncontrado +
            "\nPosición en el catálogo: " + posicion
        );

        console.log(
            "Servicio encontrado: " + servicioEncontrado +
            ". Posición: " + posicion
        );
    } else {
        alert("No encontramos ese servicio en el catálogo.");

        console.log("Servicio no encontrado: " + busqueda);
    }
}
administrarCatalogo();
let nombreCliente = prompt("¿Cuál es tu nombre?");

if (nombreCliente === null || nombreCliente.trim() === "") {
    nombreCliente = "cliente";
}

let tipoEvento = prompt("¿Qué tipo de evento organizarás?");

if (tipoEvento === null || tipoEvento.trim() === "") {
    tipoEvento = "evento";
}
let continuar = true;

while (continuar) {

    const opcion = prompt(
        "BIENVENIDO A FESTIV\n\n" +
        "1. Cotizar fotografías\n" +
        "2. Cotizar videos\n" +
        "3. Cotizar fotografías y videos\n" +
        "4. Consultar catálogo de servicios\n\n" +
        "Escribe salir para terminar."
    );

    if (opcion === null || opcion.trim().toLowerCase() === "salir") {
        continuar = false;
    } else if (opcion.trim() === "4") {
        consultarCatalogo();
    } else {
        procesarExperiencia(
            opcion.trim(),
            nombreCliente,
            tipoEvento
        );
    }
}

alert("Gracias por visitar Festiv.");
