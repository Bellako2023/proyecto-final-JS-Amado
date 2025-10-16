// Variables para la ropa

let Ropamas = document;

let contenedor = Ropamas.getElementById("unico");

console.log(contenedor);

let camisa = "camisa de algodon";
let pantalon = "pantalon camuflado";
let zapatillas = "zapatillas deportivas";
let buzo = "buzo overside";
let remera = "remera estampada";
let sandalias = "sandalias de cuero";
let gorra = "gorra deportiva";
let short = "short de jean";
let chaqueta = "chaqueta de cuero";
let vestido = "vestido de seda";

function mostrarPrenda(prenda) {
    console.log("La prenda es: " + prenda);
    alert("La prenda es: " + prenda);
}


let carrito = [];

const productos = [
    {id: 1, prenda: "camisa de algodon", precio: 3500},
    {id: 2, prenda: "pantalon camuflado", precio: 7000},
    {id: 3, prenda: "zapatillas deportivas", precio: 24000},
    {id: 4, prenda: "buzo overside", precio: 6000},
    {id: 5, prenda: "remera estampada", precio: 2500},
    {id: 6, prenda: "sandalias de cuero", precio: 15000},
    {id: 7, prenda: "gorra deportiva", precio: 3500},
    {id: 8, prenda: "short de jean", precio: 4000},
    {id: 9, prenda: "chaqueta de cuero", precio: 45000},
    {id: 10, prenda: "vestido de seda", precio: 30000},
];

let contenido = Ropamas.querySelector("#contenido");

    productos.forEach(producto => {
        let div = Ropamas.createElement("div");
        div.innerHTML = `
        <span> PRENDA N°: ${producto.id} </span>
        <h3> ARTICULO: ${producto.prenda} </h3>
        <p> PRECIO: $ ${producto.precio} </p>
        <button class="Agregar" data-id="${producto.id}">"Agregar al carrito"</button>
        `;

        contenido.appendChild(div);
    })

    let btns = document.querySelectorAll(".Agregar");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let productoEncontrado = productos.find((producto) => producto.id == e.target.dataset.id);
    carrito.push(productoEncontrado);
    console.log(carrito);
  });
});




const usuarios = [
    {nombre: "Amado",edad: 33},
    {nombre: "Juan",edad: 25},
    {nombre: "Ana",edad: 28},
    {nombre: "Maria",edad: 22},
    {nombre: "Jose",edad: 30}
]

localStorage.setItem('usuarios', JSON.stringify(usuarios));

let usuariosRecuperados = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuariosRecuperados);

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

const $submit = Ropamas.getElementById("submit");
        $mensaje = Ropamas.getElementById("mensaje");
        $mail = Ropamas.getElementById("mail");

function validateInputs(){
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mensajeRegex = /^.{1,250}$/;
    if(!mail.value === "") {
        alert("El mail no puede estar vacio");
        return false;
    } else if(!mailRegex.test($mail.value)){
        alert("El mail no es valido");
        return false;
    }
    if(!mensajeRegex.test($mensaje.value)){
        alert("El mensaje no es valido");
        return false;
    }
    if(mailRegex.test($mail.value)){
        alert("Ingrese el formato correcto del mail");
        $mail.style.border = "1px solid red";
        return false;
    }
    if(mensajeRegex.test($mensaje.value)){
        alert("Ingrese el formato correcto del mensaje");
        $mensaje.style.border = "1px solid red";
        return false;
    }
}

//Evento
Ropamas.addEventListener("click", (e) => {
    if (e.target === $mensaje) {
        e.preventDefault();
        validateInputs();
    }
});

alert("Gracias por comprar en nuestra tienda de ropa");