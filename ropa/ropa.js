// Variables para la ropa

let camisa = "camisa de algodon";
let pantalon = "pantalon camuflado";
let zapatillas = "zapatillas deportivas";
let buzo = "buzo overside";
let remera = "remera estampada"

alert("Bienvenido a la tienda de ropa");

let ropa = prompt("Que prenda queres comprar?");
while(ropa != "camisa" && ropa != "pantalon" && ropa != "zapatillas" && ropa != "buzo" && ropa != "remera") {
    ropa = prompt("Prenda no disponible. Que prenda queres comprar?");
}
const usuarios = [
    {nombre: "Amado",edad: 33},
    {nombre: "Juan",edad: 25},
    {nombre: "Ana",edad: 28},
    {nombre: "Maria",edad: 22},
    {nombre: "Jose",edad: 30}
]

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].edad >= 30) {
        console.log(usuarios[i].nombre + " es mayor de 30 años");
    }
    if(usuarios[i].edad <= 30) {
        console.log(usuarios[i].nombre + " es menor de 30 años");
    }
}
const accesorios = "gorra";

let accesorioagregado = prompt("Que accesorio queres agregar?");

while(accesorioagregado != "gorra") {
    accesorioagregado = prompt("Que accesorio queres agregar?");
}

let precios = [3500, 7000, 24000, 60000];
precios.push({
    id: 1,
    precio: "3500"
});

precios.push({
    id: 2,
    precio: "7000"
});

precios.push({
    id: 3,
    precio: "24000"
});

precios.push({
    id: 4,
    precio: "60000"
});


console.log(precios);

for(let producto of precios) {
    console.log(producto);
}

alert("Gracias por comprar en nuestra tienda de ropa");