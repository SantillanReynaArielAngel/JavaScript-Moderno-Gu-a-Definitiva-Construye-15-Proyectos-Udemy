//PROBLEMA CON LOS OBJETOS
//NOTA:
// UN OBJETO DECLARADO COMO 'CONST' PUEDE SER REASIGNADA SUS PROPIEDADES, COMO TAMBIEN SE VIO QUE SE PUEDE AÑADIR Y ELIMINAR  SUS PROPIEDADES
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}


console.log(producto);

producto.disponible=false;
console.log(producto);