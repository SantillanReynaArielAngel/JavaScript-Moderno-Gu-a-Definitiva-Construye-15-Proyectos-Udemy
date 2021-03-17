
//Metodos para  objetos: keys, values y entries
//Ejemplo de Object literal.
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}

// Metodo keys: Devuelve las llaves o propiedades(la parte izquierda del objeto) de un objeto(nombre, precio, disponible en este caso). Se utiliza para saber si un objeto esta vacio no o si el resultado deuna consulta fue exitosa o no si devuelve o no info
console.log(Object.keys(producto)); 

//Metodo values; Devuelve los valores que contienen las propiedades de un objeto, es decir devuelve la parte derecha del objeto
console.log(Object.values(producto));

//Metodo etries: devuelve las propiedades y los valores de un objeto  en pares de 2
console.log(Object.entries(producto));