'use strict';

// Se generá la instancia de Lista para poder tener acceso a la lista de registro
const registrador = new Lista();

// Se declara la variable que guardará la respuesta de un siguiente registro o imprimir la lista
let respuesta = '';

// Se ocupa un do while, ya que pretendemos que el usuario nos entregue al menos un registro
do {

    // Se solicita la usuario los datos necesarios para generar la instancia
    let nombre = prompt('Nombre:')
    let edad = prompt('Edad:')
    let grado = prompt('Grado:')
    let grupo = prompt('Grupo:')

    // Se genera la instancia del nuevo registro
    let registro = new Alumno(nombre, edad, grado, grupo);

    // Se ocupa el metodo agregaRegistro para guardar la instancia generada en la lista de registros
    registrador.agregaRegistro(registro);

    // Se le pregunta al usuario si desea agregar un nuevo registro
    respuesta = prompt('Desea registrar otro alumno [s] [n]')

} 
// Si la respuesta es 's' (y solo la s minuscula, una 'S' terminaria el ciclo)
while(respuesta === 's')

// Mensaje para informar al usuario que se imprimirá la lista de registros
console.info('Lista de Alumnos registrados')

// Se invoca el metodo muestraContenido, ya que este permite imprimir todos los registros existentes
registrador.muestraContenido();
