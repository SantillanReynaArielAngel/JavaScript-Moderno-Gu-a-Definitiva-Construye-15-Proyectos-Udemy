//ACEDER A LAS PROPIEDADES DE UN OBJETO

const producto={
    nombre: "monitor2",
    precio: 70.5,
    disponible: true,
}

console.log(producto);

//sintaxis de  . para aceder a los valores de un objeto.
console.log(producto.nombre);
console.log(producto.disponible);

//otra forma para acceder, para ello se necesita saber las propiedades(campos llave) del object
console.log(producto['nombre']);
console.log(producto['disponible']);
