//METODOS DE UN OBJETO:
//CONGELAR UN OBJETO PARA NO PODERLO MODIFICAR

// "use strict" :   SIRVE PARA QUE LA FORMA DE ESCRITURA DE LA SINTAXIS SEA MAS ESTRICTA, apartir desde su linea.
//Ej. x=20; console.log(x); Nos dara error por que no definimos el tipo de dato a x (si no usaramos 'use estrict' funcionaria normalmente).
 
'use strict' 
const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}

//Oject:freeze(objecto_a_congelar);     Sirve para congelar e impide que un objeto sea modificado.
Object.freeze(producto);
// producto.disponible=false;
// producto.imagen="imagen.jpg";
// delete producto.precio;
console.log(producto);

//Object.isFrozen(objecto);    Sisrve para verificar si un objeto esta congelado.
//Nota: si tendriamos la necesidad de modificar un objecto congelado, deberiamos realizar una copia del mismo para hacerlo.
console.log(Object.isFrozen(producto));
