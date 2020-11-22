//Metodos Replace, Slice, Substring y charAt
const producto='Monitor de 20 Pulgadas';
console.log(producto);

//replace(), siver  para remplazar un porcion de texto con otra dentro de un string
// replace es sencible a minusculas y mayusculas
console.log('\nUtilizando replace()');
console.log(producto.replace('Monitor', 'Monitor curvo'));
console.log(producto.replace('Pulgadas','"'));

//slice(valorInicio,valorFinal), sirve para corta o cortar una parte de un string
//slice cuenta desde la posision 0
console.log('\nUtilzando slice()');
console.log(producto.slice(0,8));
console.log(producto.slice(8));// si se le pasa solo un valor, slice cortara en adelante del valor dado
console.log(producto.slice(8,0)); //En este caso no se obtine nada por que el valorInicial>ValorFinal


//substring(), funciona igual que slice(), pero adicionalmente si se le pasa valorInicial>ValorFinal lo que hara internamente es intercambiar "ValorFinal>valorInicial" para devolver algo
console.log('\nUtilizando substring()');
console.log(producto.substring(0,8));
console.log(producto.substring(8,0));// como s epuede observar los valores se intercambian si valorInicial>ValorFinal
console.log(producto.substring(8));

//charAt, sirve para cortar una letra de un string, se manda por parametro la posiison a cortar.
//charAt() cuanta desde la posision 0 
console.log('\n Utilizanfo charAt() para cortar una letra de un string');
console.log(producto.charAt(0));
console.log(producto.charAt(5));
console.log(producto.charAt(8));


