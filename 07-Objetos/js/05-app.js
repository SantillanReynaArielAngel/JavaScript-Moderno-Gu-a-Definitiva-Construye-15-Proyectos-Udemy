//OBJECTOS DESNTO DE OTRO OBJECTO
const producto={
    nombre: "monitor2",
    precio: 70.5,
    disponible: true,
    informacion:{
        medidas:{
            peso:"1Kg",
            medida:'internacional'
        },
        fabricacion:{
            pais:"China"
        }
    }
}

console.log(producto);

console.log(producto.precio+"\n"+producto.informacion);//por alguna raxon no nos muestar las propiedades de informacion
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion.pais);
