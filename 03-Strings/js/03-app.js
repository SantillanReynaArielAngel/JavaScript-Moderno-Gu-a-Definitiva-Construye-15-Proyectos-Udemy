const producto='Monitor de 20 Pulgadas';
const precio = '30 USD ';

//Se tienen diferentes formas de concaternar:

//1) Metodo concat(), se le pasa por parametro la variable o un string que se quiera concatenar
console.log('Concatendo con el metodo concat():');
console.log(producto.concat(precio));
console.log(producto.concat('en descuento!!!'));

//2) utilizando "+ +"
console.log('\nConcatendo con "+":'); //  \n  se utiliza para hacer saltos de linea
console.log('El producto '+producto+' tiene un precio de: '+precio);


//3) utilizando ","
//al colocar , se crea un espacio entre ' y la , en el resultado de la consola.
console.log('\nConcatenado con ",": ');
console.log('El producto',producto,'tiene un precio de:',precio);

//4) utilizando Tempalte string (``) son comillas invertidas, es la sintaxis de ecmcript6
//LAs variables que estaran dentro de una cadena se coloca de la suguiente manera ${variable}
console.log('\nConcatenado con `` :');
console.log(`El producto ${producto} tiene un precio de: ${precio}`);