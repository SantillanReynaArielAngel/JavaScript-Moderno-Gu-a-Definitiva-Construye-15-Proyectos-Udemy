// 3 formas de crear string
// los string puede ir  ente comillas "" o '' pero no mexcladas ('"'"   "'"')

//const producto1="Monitor de 20 pulgadas";
const producto1="Monitor de 20\" "; // esto se llam escarpar comillas( \" ) y solo de esta forma "" puede contener dentro otras "

//const producto2='Monitor de 27 pulgadas';
const producto2='Monitor de 27" ';  //Es valiso que '' contega ""
const producto3=new String('Monitor de 17 pulgadas');

console.log(producto1);
console.log(producto2);
console.log(producto3);