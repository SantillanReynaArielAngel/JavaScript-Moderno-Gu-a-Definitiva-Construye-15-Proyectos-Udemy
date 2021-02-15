//desectructuracion de objetos
const producto={
    nombre: "monitor2",
    precio: 70.5,
    disponible: true,
}

console.log(producto);

//Forma antigua e incorrecta:
//extraendo una propiedad de un objecto y guardarla en una variable;
const nombre2 = producto.nombre;
console.log(nombre2);

//Buena Practica utilizando desectructuracion
//Nota: solo podemos sacar las propiedades que existan en un objeto, de otra forma nos dara error
const { nombre } = producto;
console.log(nombre)
// para sacar mas de 1 valor solo se coloca ","
const {precio, disponible}=producto;
console.log(precio);
console.log(disponible);
//desectructuracion cambiando el nombre de la variable

const { nombreA=nombre, precioA=precio, disponibleA=disponible}=producto;
console.log(nombreA+" - "+precioA+" - "+disponibleA)

