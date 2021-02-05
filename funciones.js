function nuevoRegistro() {
    // Se solicita la usuario los datos necesarios para generar la instancia
    let nombre = prompt('Nombre:')
    let edad = prompt('Edad:')
    let grado = prompt('Grado:')
    let grupo = prompt('Grupo:')

    // Retornamos la instancia de la clase alumno
    return new Alumno(nombre, edad, grado, grupo);
}

function preguntaUsuario() {
    // Retornamos la respuesta del promp que nos proporciona el usuarios
    return prompt('Desea registrar un alumno [s] [n]');
}

function reporte(lista) {
    // Mensaje para informar al usuario que se imprimirá la lista de registros
    console.info('Lista de Alumnos registrados')

    // Se invoca el metodo muestraContenido, ya que este permite imprimir todos los registros existentes
    lista.muestraContenido();
}