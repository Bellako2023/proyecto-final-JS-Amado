


// la idea es agregar mas variables

let preciofinal = 0;
let elegir;
do {
    elegir = prompt("Bienvendio a la tienda, elija su perfueme favorito:\n1.- Chanel n°5\n2. Dior Sauvage\n3.- Gucci Bloom\n4.- Versace\n5.- Power\n6.- Salir");

switch (elegir) {
    case "1":
        preciofinal = preciofinal + 65000;
        console.log("Hasta el momento su compra es de : $" + preciofinal);
        break;
        case "2":
            preciofinal = preciofinal + 80000;
        console.log("Hasta el momento su compra es de : $" + preciofinal);
        
        break;
        case "3":
            preciofinal = preciofinal + 90000;
        console.log("Hasta el momento su compra es de : $" + preciofinal);
        break;
        case "4":
        console.log("gracias por comprar, monto total de: $" + preciofinal);
        break;

        default:
            console.log("No tenemos ese producto");
            break;
}
let continuar = confirm("Desea seguir comprando?");
if (!continuar) {
    elegir = "4" + "2" !== "1"; // aca me equivoque y no se como arreglarlo
} while (elegir !== "4");
alert("Gracias por comprar en nuestra tienda de perfumes");
}