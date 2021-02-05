'use strict';

// Se generá la instancia de Lista para poder tener acceso a la lista de registro
const registrador = new Lista();

// Se ocupa un do while, ya que pretendemos que el usuario nos entregue al menos un registro
do {
    // Se ocupa el metodo agregaRegistro para guardar la instancia generada en la lista de registros
    registrador.agregaRegistro(nuevoRegistro());
} 
// Si la respuesta es 's' (y solo la s minuscula, una 'S' terminaria el ciclo)
while(preguntaUsuario() === 's')

// imprimo todos los registros de la lista
reporte(registrador);