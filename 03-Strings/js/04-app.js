//CORTAR ESOACIOS EN BANCO DE UN STRING
const producto='                 Monitor de 20 Pulgadas               ';

console.log(producto);
console.log(producto.length);

//Metodo trimStart(), sirve para cortar los espacio que estan antes de un string
console.log(producto.trimStart());

//Metodo trimEnd(), sirve para cortar los espacios que estan despues de un string
console.log(producto.trimEnd());

//trim() corta los espacion que esatn antes y despues de un string
console.log(producto.trim());
//Tambien se pueden usar los metodos de forma decencadenada.
console.log(producto.trimStart().trimEnd()); //primero corta lso espcioa que esatn antes y posteriormente corta los que estan despues.
