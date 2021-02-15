// Convertir String a Nuemeros

const numero1="20";
const numero2="20.2";
const numero3="Uno";
const numero4=20;

console.log(numero1);
//parseInt(): convierte un string a un entero
console.log(Number.parseInt(numero1));
//parseFloat(): convierte un string a un flotante
console.log(Number.parseFloat(numero2));


//revisar si un numero es entero o no:
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4))

