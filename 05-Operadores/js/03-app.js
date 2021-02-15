//COMPARAR NULL CON UNDEFINED

//undefined
let numero;
console.log(numero); //saldra undefined por que no se asigno un valor a numero

//null
let numero2=null;
console.log(numero2);// sale null
console.log(typeof numero2); //su tipo es object

console.log(numero==numero2);// dara true, por ello es lo mejor comparar de forma estricta.
console.log(numero===numero2);