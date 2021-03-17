//ACEDER A LOS VALORES DE UN ARRAY: se acceden atravez de su indice
//Los indices empiezan desde 0 en los arrays
const numeros=[10,20,30,40,50,[1,2,3]];

console.log(numeros);
console.table(numeros);

//Accdediendo al valor 30 que esta en la posision 2
console.log(numeros[2]);//nos dara 30

//accediendo al valor 10 que esta en la primera posision
console.log(numeros[0]);

//Sacando el valor 3: se accede al array interno que esta en la posision 5 y luego se accede al valor deseado especificando el subindice( indice del array interno) en este caso 2.
console.log(numeros[5][2]);


//ejemplo2: Saque la frazada
const casa = ['numero de vivienda', 'n pisos', ['cuartos', ['dormitorio',['camas', ['colchon', 'frazadas'] ,'mesas', 'sillas'],'cocina','baño']]];
console.log(casa[2][1][1][1][1]);