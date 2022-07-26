console.log("conectado a operador-territorio");

//dias de la semana abrimos a las 11
//pero los fines de semana abrimos a las 9

const dia = 1; //el domingo es el dia 0 segun el objeto js
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a la hora xx

//ejemplo con if normal
if ([0, 6].includes(dia)) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Dia de semana");
  horaApertura = 11;
}

console.log({ horaApertura });

//ejemplo con operador ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11;
console.log({ horaApertura });

//sacar el mensaje de apertura
mensaje =
  horaActual >= horaApertura
    ? "Está abierto"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ mensaje });
