'use strict';

// Se generá la instancia de Lista para poder tener acceso a la lista de registro
const registrador = new Lista();

// Si la respuesta es 's' (y solo la s minuscula, una 'S' terminaria el ciclo)
while(preguntaUsuario() === 's') {
    registrador.agregaRegistro(nuevoRegistro());
}

// imprimo todos los registros de la lista
reporte(registrador);