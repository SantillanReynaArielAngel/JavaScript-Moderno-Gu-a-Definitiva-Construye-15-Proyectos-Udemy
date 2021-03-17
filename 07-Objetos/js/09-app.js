//SELLAR UN OBJETO
"use strict"
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}

// Object.seal(objeto);     Sirve para sellar un objeto, Permite cambiar los valores de las prpiedades existentes de un objeto pero NO PERMITE añadir ni eliminar ninguna pripiedad.
Object.seal(producto);

//Modificando una propiedad:
producto.precio=90.5;

// La siguiente linea dara error por que el objeto esta sellado y no permite la eliminacion de una propiedasd.
// delete producto.precio;

console.log(producto);

// Object.isSealed(objeto);   Sirve para comprobar si un objeto esta sellaldo
console.log(Object.isSealed(producto));