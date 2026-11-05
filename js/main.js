
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

    if (presupuesto > 0) {

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

    } else {
        alert("Ingresa un presupuesto válido mayor a $0.");
    }
}


const nombreCliente = prompt("¿Cuál es tu nombre?");
const tipoEvento = prompt("¿Qué tipo de evento organizarás?");

let continuar = true;


while (continuar) {
    const opcion = prompt(
        "¿Qué experiencia te interesa? Escribe el número de tu opción:\n" +
        "1. Fotografías\n" +
        "2. Videos\n" +
        "3. Fotografías y videos\n" +
        "Escribe salir para terminar."
    );

    if (opcion === null || opcion.trim().toLowerCase() === "salir") {
        continuar = false;
    } else {
        const servicio = recomendarExperiencia(opcion.trim());
        const precio = obtenerPrecioServicio(opcion.trim());

        if (precio === 0) {
            alert("Opción no válida. Intenta nuevamente.");
        } else {
            const respuestaPresupuesto = prompt(
                "¿Qué presupuesto destinarías a esta experiencia?"
            );

            if (respuestaPresupuesto !== null) {
                const presupuesto = Number(respuestaPresupuesto);

                evaluarPresupuesto(presupuesto, precio, servicio, nombreCliente, tipoEvento);
            }

            const respuesta = prompt(
                "¿Quieres consultar otra experiencia? si/no"
            );

            if (respuesta === null || respuesta.trim().toLowerCase() !== "si") {
                continuar = false;
            }
        }
    }
}
