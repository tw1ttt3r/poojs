// inmutabilidad 
// let nombre = 'pedro';
// let nombre1 = nombre;
// nombre1 = 'Laura';

// console.log(nombre1);
// console.log(nombre);

// nombre = 'Jorge';

// console.log(nombre);
// console.log(nombre1);


// let persona = '';

// // funcion para cambiar el nombre

// // variable global

// // return 

// let persona2 = () => 'Laura'


// let numeros = [3,4,6,7,8,93,4];

// function dobleNumero(arreglo) {
//     let numeros2 = [];
//     for (let i = 0; i < arreglo.length; i++) {
//         numeros2.push(numeros[i] * 2);
//     }
//     return numeros2;
// }

// // const numeros2 = dobleNumero(numeros);

// console.log(dobleNumero(numeros));



// const personas = [
//     { name: 'Raul', edad: 45, hobbies: ['jugar', 'comer', 'ver series']},
//     { name: 'Antonio', edad: 50, hobbies: ['nadar',]},
//     { name: 'Miguel', edad: 15, hobbies: ['caminar', 'musica', 'ver series']},
//     { name: 'Saul', edad: 9, hobbies: ['jugar', 'cine', 'ver series']},
//     { name: 'Lorenzo', edad: 8, hobbies: ['correr', 'comer', 'bicicleta']},
//     { name: 'Maria', edad: 12, hobbies: ['llamar', 'comer', 'cocinar']},
//     { name: 'Juana', edad: 12, hobbies: ['jugar', 'leer', 'ver series']},
//     { name: 'Daniel', edad: 7, hobbies: ['jugar', 'comer', 'leer']},
//     { name: 'Gabriela', edad: 8, hobbies: ['jugar', 'nadar', 'ver series']},
//     { name: 'Esperanza', edad: 17, hobbies: ['jugar', 'comer', 'patinar']},
// ];

// const personas2 = [...personas];


// for (let i = 0; i <= personas.length; i++) {
//     personas2.push(personas[i])
// }


// function obtenUsuario(data) {
//     let newData = [];
//     for (persona of data) {
//         if (persona.edad > 17) {
//             newData = [...newData, persona];
//         }
//     }
//     return newData;
// }

// console.log(obtenUsuario(personas));


// MAP
//             // 0,1,2,3,4,5 ,6
// let numeros = [3,4,6,7,8,93,4];

// const doble = numeros.map( (current, index, array) => {
//     if (index % 2) {
//         return current * 2
//     }
// });  //[6]
                                                       // [6,8]
                                                       // [6,8,12]
                                                       // ....

// const filtro = numeros.filter((current, index, array) => {
//     if (index % 2 === 0) {
//         return current * 2
//     }
// });

// []
// []
// [12]
// [12]

// ....

// 0,1,2,3,4,5 ,6
// let numeros = [3,4,6,7,8,93,4];

// // console.log(
// //     numeros.reduce((previous, current, currentIndex, currentArray) => 
// //     {
// //         console.log('recorrido ', currentIndex);
// //         console.log(previous);
// //         console.log(current);
// //         return previous + current
// //     })
// // );


//             // 0,1,2,3,4,5 ,6
// let numeros = [3,4,6,7,8,93,4];

// console.log(numeros.reduce((previous, current, currentIndex, currentArray) => {
//     if (index % 2 === 0) {
//         return current * 2
//     }
//     return previous;
// }))

// reduce((previous, current, currindex, array) => {})

// si parametro 2 no existe, previous = array[0] en el recorrido 0, current = array[0 + 1] 
// si parametro 2 existe, previous = segundo parametro en el recorrido 0, current = array[0] 

// para el recorrido 1 en adelante, previous = return de la funcion,  current array[currIndex + 1]


// recorrido 0

// previous = 3, current = 4, currentIndex = 1, currentArray= [3,4,6,7,8,93,4]
// false
// previous = 3

// recorrido 1

// previous = 3, current = 6, currentIndex = 2, currentArray= [3,4,6,7,8,93,4]
// true
// current * 2 = 12

// recorrido 2

// previous = 12, current = 7, currentIndex = 3, currentArray= [3,4,6,7,8,93,4]
// false
// previous = 12

// recorrido 3

// previous = 12, current = 8, currentIndex = 4, currentArray= [3,4,6,7,8,93,4]
// true
// previous = 16

// recorrido 4

// previous = 16, current = 93, currentIndex = 5, currentArray= [3,4,6,7,8,93,4]
// false
// previous = 16

// recorrido 5

// previous = 16, current = 4, currentIndex = 6, currentArray= [3,4,6,7,8,93,4]
// true
// current * 2 = 8

// previuos = 8






/*
[
    { nombre: 'Maria', calificaciones: [9,9,7,8,10] },
    { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
    { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
    { nombre: 'Luis', calificaciones: [9,9,7,8] },
    { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
    { nombre: 'Maria', calificaciones: [9,9,8,10,5] },
    { nombre: 'Pedro', calificaciones: [7,9,7,8,10] },
    { nombre: 'Julio', calificaciones: [6,0,7,8,10] },
]
*/


// retornar los alumnos con promedio mayor a 9

// return []

// let alumnos = [
//     { nombre: 'Maria', calificaciones: [9,9,7,8,10] }, // 
//     { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
//     { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
//     { nombre: 'Luis', calificaciones: [9,9,7,8] },
//     { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
//     { nombre: 'Maria', calificaciones: [9,9,8,10,10] },
//     { nombre: 'Pedro', calificaciones: [7,9,9,8,10] },
//     { nombre: 'Julio', calificaciones: [10,9,7,8,10] },
// ];

// console.log(
//     alumnos.reduce((p,c) => {
//         if ((c.calificaciones.reduce((c1,c2) => c1+c2) / 5) > 8) {
//             p = [...p, c]
//         }
//         return p;
//     }, [])
// );

// recorrido 0

// p = [], c= { nombre: 'Maria', calificaciones: [9,9,7,8,10] }
// c1= 9, c2= 9
// 18
//c1 = 18, c2= 7
// 25
// c1 = 25, c2 = 8
// 33
// c1 = 33, c2 = 10
// 43

// reduce = 43

// []


// const header = document.getElementById('header');

// header.innerHTML = 'Este texto es nuevo';

// console.log(header)


// console.log(document.getElementsByClassName('lieELement'))
// const lis = Array.from(document.getElementsByClassName('lieELement'))

// lis[2].style.color = 'pink';

// lis[0].remove();

const clases = ['rojo', 'azul', 'negro', 'verde', 'cafe'];

// Math.floor(Math.random() * (clases.length - 0 + 1) ) + 0;

// 1.25
// 1

// 1.75
// 2

function colorAleatorio(id) {
    const boton = document.getElementById(id);
    const color = Math.floor(Math.random() * (clases.length - 0 + 1) ) + 0;
    console.log(color);
    boton.classList.add(clases[color]);s
}

const elementos = [];

function guardaValor() {
    const input = document.getElementsByTagName('input')[0]; // [<input>]
    if (isNaN(Number(input.value))) {
        elementos.push(Number(input.vale))
    } else {
        elementos.push(input.value);
    }

    elementos.forEach( elemento => document.write(`<h2>${elemento}</h2>`) );
}
