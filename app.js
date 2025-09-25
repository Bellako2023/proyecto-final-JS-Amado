// variable es un de memoria en nuestro sitio web

// declaracion 
// let nombre = "valentine";  // string
// let edad = 32; // number
// let esdesarrollador = true; //boolean

// const dni = 3300000 // number


// console.log(nombre);
// console.log(edad);

// nombre = "pamela";

// let num1 = 8;
// let num2 = 5;
// let num3 = "1";

// console.log(num1 + num2);
// console.log(num1 * num2);


// let nombreIngresado = prompt("ingrese nombre");
// console.log("Hola " + nombreIngresado);

// alert("bienvenidos al curso de javscript");

// let continuar = confirm("¿Estas seguro que queres continuar?");
// console.log(continuar);


// let nombre = "daniela";
// console.log(nombre);

// let esprogramador = "true";
// console.log(esprogramador)

// let num1 = 458;
// let num2 = 269;
// let num3 = "748";
// let num4 = 852;

// console.log(num3 / num4);

// condicionesles


// let peso = prompt("ingrese su peso");

// if (edad !==20) {
// console.log("sos mayor de edad");
// }


// if (edad > 20) {
// console.log("sos mayor de edad");
// }

// AND siempre que todas las condiciones sean true el operador sera true  
// if (!(edad >= 20 && edad <= 30)) {
//     console.log("podes entrar");
// }

// OR siempre que una condicion sea true, el operador OR sera true

// if (edad >= 20 || edad <= 30) {
//     console.log("podes entrar");
// }

// let edad;
// let conalguien;
// if (edad < 20) {
//     conalguien = confirm("Estas acompañado/a");
// }

// if (edad >= 20) {
// console.log("sos mayor de edad, podes pasar");
// } else if ((edad == 23 || edad == 24) && conalguien) {
//     console.log("sos menor de edad, pero podes pasar acompañado/a");
// } else {
//     console.log("Sos menor de edad, no podes pasar");
// }

// Switch es muyu similar al if. nos permite evaluar el valor de una variable de acuerdo a distintos valores y depediendo el caso ejecutamos.
// usamos switch solamente para evaluamos condiciones de igualaddad


// switch (parseInt(peso)) {
//     case 90:
//         console.log("pesas arriba de 90, entra");
//         break;

//     default:
//         console.log("Estas en el lugar equivocado");
        
//         break;
// }

// Funciones es bloque de codigos

// function saludar(){
//     console.log("hola mundo");
// }

// saludar();

// function buscarpantalon(LasOreiro) {
//     console.log("buscarpantalon: ${LasOreriro}...");

// }

// buscarpantalon("LasOreiro");

// function saludar (repes){


//     for (let i = 0; i < repes; i++) {
// saludar();
//     console.log("Hola mundo");
//     }
// }
// saludar(5);

// function saludarusuario(nombre){
//     alert("hola" + nombre);
// }
// let nombreusuario = prompt("ingrese su nombre");
// saludarusuario(nombreusuario);

// function sumar(num1, num2){
//     // resultado es una variable local
//     let resultado = num1 + num2;
// return resultado;
// }
// // resultado de una variable global
// let resultadodesuma = sumar(5,20);
// console.log(resultadodesuma);

// function mostrarturnos(cantTurnos){
//     let cantidadDeTurnos = 0;
//     for (let i = 1; i <= cantTurnos; i++ ) {
//         cantidadDeTurnos++;
//     }
//     console.log('se han otorgado ${cantidadDeTurnos} turnos');
// }


// mostrarturnos(22);

//funciones anonimas

// (function(){
// console.log("soy una funcion anonima");
// })();

// funciones flechas es mejor mejor manejo para operaciones mas complejas

// let sumar = (num1, num2) => {
//     return num1 + num2;
// }

// let resultado = sumar(45, 85);

// console.log(resultado);

// let sumar = (num1, num2) => num1 + num2;
// let restar = (num1, num2) => num1 - num2;
// let multiplicar = (num1, num2) => num1 * num2;
// let dividir = (num1, num2) => num1 / num2;

// const calculadora = (num1, num2, operaciones) => {
//     switch (operacion) {
//         case "1":
//             console.log(sumar(num1, num2));
//             break;
//     case "2":
//         console.log(restar(num1, num2));
//             break;
//             case "3":
//                 console.log(multiplicar(num1, num2));
//             break;
//             case "4":
//                 if (num2 === 0){
//                     console.error("error: no se puede dividir por cero");
//                 } else {
// console.log(dividir(num1, num2));
//                 }
//             break;
//         default:
//             console.log("operacion no valida");
//             break;
//     }
// };

// let numero1 = parseInt(prompt("ingrese el primer numero"));
// let numero2 = parseInt(prompt("ingrese el segundo numero"));
// let operacion = prompt("Que operacion quiere realizar? 1)sumar 2)restar 3)multiplicar 4)dividir");

// calculadora(numero1, numero2, operacion)

//ejemplo en vivo de iva

// const IVA = 1.21;

// let agregarIVA = (precio) => precio * IVA;

// let calculofinal = agregarIVA(parseInt(prompt("ingrese el precio del producto")));


// let arrayobjetos =[];

// arrayobjetos.push({
//     id:1 , nombre: "producto1"
// })
// arrayobjetos.push({
//     id:2 , nombre: "producto2"
// })
// arrayobjetos.push({
//     id:3 , nombre: "producto3"
// })
// console.log(arrayobjetos);

// for(let objeto of arrayobjetos){
//     console.log(objeto.nombre);
// }

// let numero = [1, 2, 3, 4, 5, 6, ];

// console.log(numero);

// let palabras = ["auto", "manzana", "perra", "programacion"];

// console.log(palabras);

// console.log(palabras[2]); 

// let booleanos = [true, false, true, false];

// console.log(booleanos);

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matriz);

// console.log(matriz[0][2]);

let numeros = [40,5,200,9];

numeros.sort((a,b) => a -b );
console.log(numeros);

let palabras = ["auto", "campera", "vasija", "computadora"];
palabras.sort();
console.log(palabras) ;

numeros.reverse();
console.log(numeros);