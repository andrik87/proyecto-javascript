
const calcularDiferencia = (primeraCantidad, segundaCantidad) => {
    let diferencia = primeraCantidad - segundaCantidad;
    return diferencia
};

function pedirPresupuesto(pregunta) {
    const presupuesto = parseFloat(prompt(pregunta));
    return presupuesto;
}

function mostrarResumen(nombreCliente, consultas, tipoEvento) {
    alert(
        "Gracias, " + nombreCliente +
        ". Consultas realizadas para tu " + tipoEvento +
        ": " + consultas + ".");
}

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

        const presupuesto = pedirPresupuesto("¿Cuál es tu presupuesto para este servicio?");

        if (presupuesto >= precioServicio) {
            const restante = calcularDiferencia(presupuesto, precioServicio);
            alert(
                "Hola " + nombreCliente +
                ". El servicio " + servicioElegido +
                " para tu " + tipoEvento +
                " cuesta $" + precioServicio + " MXN." +
                " Tu presupuesto alcanza y te quedarían $" +
                restante + " MXN."
            );
        } else if (presupuesto > 0) {
            const faltante = calcularDiferencia(precioServicio, presupuesto);

            alert(
                "El servicio " + servicioElegido +
                " cuesta $" + precioServicio + " MXN." +
                " A tu presupuesto le faltan $" +
                faltante + " MXN."
            );
        } else {
            alert("Ingresa un presupuesto válido mayor a $0.");
        }
        const continuar = prompt("¿Quieres realizar otra consulta? Escribe si o salir");
        if (continuar === null || continuar.trim().toLowerCase() === "salir") {
            opcion = "salir";
        }

    }
}

mostrarResumen(nombreCliente, consultas, tipoEvento);