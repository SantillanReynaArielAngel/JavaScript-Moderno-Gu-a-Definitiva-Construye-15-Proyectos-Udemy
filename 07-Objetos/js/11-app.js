//this sirve para referirse o acceder a propiedades dentro de un mismo objeto

//Ejemplos de object literal
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tienen un precio de ${this.precio}`)
    }
}




const producto2={
    nombre: "mause",
    precio: 35,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tienen un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();