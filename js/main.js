
const nombreCliente = prompt("¿Cuál es tu nombre");
const tipoEvento = prompt("¿Qué tipo de evento organizarás?");
const precioEspejo = 3900;
const precioCabina = 3200;
const precioPaquete = 6500;

let opcion = "";
let precioServicio = 0;
let servicioElegido = "";
let consultas = 0;

while (opcion !== "salir") {
    precioServicio = 0;
    servicioElegido = "";

    const entrada = prompt("Escribe: espejo, cabina, paquete o salir");

    if (entrada === null) {
        opcion = "salir";
    } else {
        opcion = entrada.trim().toLowerCase();
    }

    switch (opcion) {
        case "espejo":
            servicioElegido = "Espejo Mágico";
            precioServicio = precioEspejo;
            break;

        case "cabina":
            servicioElegido = "Cabina 360";
            precioServicio = precioCabina;
            break;

        case "paquete":
            servicioElegido = "Espejo Mágico + Cabina 360";
            precioServicio = precioPaquete;
            break;

        case "salir":
            break;

        default:
            alert("La opción ingresada no es válida.");
    }

    if (precioServicio > 0) {
        consultas++;

        const presupuesto = parseFloat(
            prompt("¿Cuál es tu presupuesto para este servicio?")
        );

        if (presupuesto >= precioServicio) {
            const restante = presupuesto - precioServicio;

            alert(
                "Hola " + nombreCliente +
                ". El servicio " + servicioElegido +
                " para tu " + tipoEvento +
                " cuesta $" + precioServicio + " MXN." +
                " Tu presupuesto alcanza y te quedarían $" +
                restante + " MXN."
            );
        } else if (presupuesto > 0) {
            const faltante = precioServicio - presupuesto;

            alert(
                "El servicio " + servicioElegido +
                " cuesta $" + precioServicio + " MXN." +
                " A tu presupuesto le faltan $" +
                faltante + " MXN."
            );
        } else {
            alert("Ingresa un presupuesto válido mayor a $0.");
        }
    }
}

const mensajeFinal =
    "Gracias, " + nombreCliente +
    ". Consultas realizadas para tu " + tipoEvento +
    ": " + consultas + ".";

console.log(mensajeFinal);
alert(mensajeFinal);