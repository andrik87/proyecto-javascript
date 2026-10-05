const nombreCliente = prompt("¿Cuál es tu nombre");
const tipoEvento = prompt("¿Que tipo de evento organizarás?");
const servicio = prompt("¿Qué servicio te interesa?");
const horas = parseInt(prompt("¿Cuántas horas quieres de servicio?"));
const precioPorHora = parseFloat(prompt("¿Cuál es el precio por hora?"));
const total = horas * precioPorHora;
let mensajeFinal = "Hola " + nombreCliente;
mensajeFinal = mensajeFinal
+ ". Para tu " + tipoEvento
+ ", el servicio " + servicio
+ " por " + horas
+ " horas tiene un costo aproximado de $" + total
+ ". ";
console.log(mensajeFinal);
alert(mensajeFinal)