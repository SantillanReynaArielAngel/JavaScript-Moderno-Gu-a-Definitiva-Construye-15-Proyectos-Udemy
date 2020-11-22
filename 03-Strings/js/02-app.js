//Metodos de String : includes y length

const producto2='Monitor de 27';

//length sirve para contar el tamaño de un string, incluye los espacion dentro del string
console.log(producto2.length);

//includes sirve para verificar si existe un string dentro de otro, para esto se le pasa por parametro el string que se quiere encontrar
//Este medoto es sencible a mayusculas y minusculas
console.log(producto2.includes('de'));

//indexOf,es pareciso a includes pero indexOf regresa la posision(cuenta desde 0) de un un string buscado dentro otro estring.
//Este medoto es sencible a mayusculas y minusculas
console.log(producto2.indexOf('de'));