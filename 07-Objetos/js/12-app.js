//Ejemplo de Object literal.
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}

//Ejemplo de Object constructor: crea el objeto de forma dinamica y asiigna valores a sus propiedades(this.propiedad) atravez de los parametros que se introducen
function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true; //Aqui se asignara por default true para la propiedad disponoble
}

const producto2 = new Producto('TV de 24"', 500);
console.log(producto2);

const producto3 = new Producto('tablet', 100);
console.log(producto3);