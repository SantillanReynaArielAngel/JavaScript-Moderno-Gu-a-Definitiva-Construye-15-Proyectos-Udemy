//AGREGAR O ELIMINAR 'PROPIEDADES' DE UN OBJETO

const producto={
    nombre: "monitor2",
    precio: 70.5,
    disponible: true,
}


//agregar propiedades
//Se tiene  la siguiente sintaxis: objecto.nueva_propiedad=valor;
producto.imagen="url de la imagen.jpg";
console.log(producto);

//eliminar una propiedad de un objecto
//sintaxis: delete objecto.propiedad_a_eliminar;
delete producto.precio;
console.log(producto);