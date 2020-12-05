//Metodos repeat, split
const producto='Monitor de 20 Pulgadas';

//repeat(n), sirve para repetir n veces un estring
console.log(producto.repeat(3));
numero = '1234 '.repeat(5);// mostrarar en pantalla 5 veces todo el string
console.log(numero);

//split, sirve para dividir un string apartir de una coincidencia pasada por parametro
const actividad='Estoy aprendiendo js Moderno #JSModerno';
console.log(actividad.split(' '));
console.log(actividad.split('#'));// encuentra el # y divide en 2 el string(antes y despues del #)

const hoobies='Jugar Dota, Escuchar Rock, Ver anime, Politica';
console.log(hoobies.split(',')); 

let hoo=[];
hoo=hoobies.split(',');
console.log(hoo[2]);//Ver anime