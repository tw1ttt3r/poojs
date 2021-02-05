class Alumno extends Persona {

    constructor(nombre, edad, grado, grupo) {
        //  Se inicializa la clase enviando los valores que requiere su constructor
        super(nombre, edad);
        
        // Se generaron esta dos propiedades que solo un alumno podría tener
        this.grado = grado;
        this.grupo = grupo;
    }

    // se generó el metodo en esta clase ya que Persona no cuenta con todos los datos que se especifican
    // para imprimir en la lista
    describe() {
        console.log(`Soy ${this.nombre}, tengo ${this.edad} años soy del ${this.grado} ${this.grupo.toUpperCase()}`);
    }

}