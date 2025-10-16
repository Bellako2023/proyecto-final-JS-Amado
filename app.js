


// const usuario = {
//     id: "1234",
//     nombre: "Amado",
//     correo: "Amado@example.com"
// };

// localStorage.setItem('usuario', JSON.stringify(usuario));

// const usuarioAlmacenado =
// JSON.parse(localStorage.getItem('usuario'));

// console.log(usuarioAlmacenado);

// Ejemplo de uso de localStorage

// let usuario = {
//     nombre: "Amado",
//     edad: 30
// }

// console.log(usuario);

// let usuarioJSON = JSON.stringify(usuario);
// console.log(usuarioJSON);

// localStorage.setItem('usuario', usuarioJSON);

// let usuariorecuperado = localStorage.getItem('usuario');
// console.log(usuariorecuperado);

// let usuarioObjeto = JSON.parse(usuariorecuperado);

// console.log(usuarioObjeto);

// let productos = {
//     nombre: "pantalon",
//     precio: 7000,
//     diseño: "jean"
// }
// console.log(productos);

// let productosJSON = JSON.stringify(productos);
// console.log(productosJSON);

// localStorage.setItem('productos', productosJSON);

// let productosRecuperados = localStorage.getItem('productos');
//     console.log(productosRecuperados);

// let productosObjeto = JSON.parse(productosRecuperados);

// console.log(productosObjeto);

// let carrito = ["auto", "moto", "camioneta"];
// console.log(carrito);

// let carritoJSON = JSON.stringify(carrito);
// console.log(carritoJSON);

// localStorage.setItem('carrito', carritoJSON);

// let carritoRecuperado = localStorage.getItem('carrito');
// console.log(carritoRecuperado);

// let carritoObjeto = JSON.parse(carritoRecuperado);
// console.log(carritoObjeto);


// let muebles = {
//     nombre: "sillon",
//     precio: 65000,
//     color: "gris",
//     material: "cuero"
// }
// console.log(muebles);

// let mueblesJSON = JSON.stringify(muebles);

// console.log(mueblesJSON);

// localStorage.setItem('muebles', mueblesJSON(muebles));

// let mueblesRecuperados = localStorage.getItem('muebles');

// console.log(mueblesRecuperados);

// let mueblesObjeto = JSON.parse(mueblesRecuperados);

// console.log(mueblesObjeto);

const carrito = {
    items: [
        {id: 1, nombre: "auto", precio: 20000, cantidad: 4},
        {id: 2, nombre: "moto", precio: 10000, cantidad: 3}
    ]
        
}

console.log(carrito);

localStorage.setItem('carrito', JSON.stringify(carrito));

const carritoRecuperado = JSON.parse(localStorage.getItem('carrito'));

console.log(`total de productos: ${carritoRecuperado.items.length}`);

const total = carritoRecuperado.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

console.log(`total a pagar: ${total}`);

const = [
    id
]