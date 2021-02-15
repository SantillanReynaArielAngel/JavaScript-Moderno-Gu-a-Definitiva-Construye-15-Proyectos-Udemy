//boolean solo tiene 2 valores: true o false

const boolean1 = true;
const boolean2= false;
const boolean3= 'true';

console.log(boolean1);
console.log(typeof boolean1);
console.log(boolean2);
console.log(typeof boolean2);

//comparando
console.log(boolean1==boolean3);
console.log(boolean1===boolean3);


//otra forma de crear booleanos

const boolean4 = new Boolean(true); // esta forma de declarar, nos crea un objeto
console.log(boolean4);
console.log(typeof boolean4);
