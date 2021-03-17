//COPIAR 2 OBJETOS

const producto={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
}

const medidas={
    peso:"1Kg",
    medida:'Internacional',
}

console.log(producto);
console.log(medidas);

//Uniendo los 2 objetos
//1) Sintaxis: const nueva_varialble=Object.assign(objeto1, objeto2);
const resultado=Object.assign(producto,  medidas);
console.log(resultado);

//2) Usando Spread Operator o Rest Operator
//Sintaxis: const nueva_variable={...objecto1, ...objeto2}
const resultado2={...producto, ...medidas}
console.log(resultado2);

// Pruebas:
console.log('/////////////////////');
const articulo={
    nombre: "monitor 20 PULGADAS",
    precio: 70.5,
    disponible: true,
    imagen:"imagen.jpg",
    fabricacion:{
        pais:'Bolivia',
    }
}

const mediciones={
    peso:"1Kg",
    medida:'Internacional',
    dimenciones:{
        alto:'15cm',
        largo:"20cm",
        ancho:"10cm",
    }
}

console.log(articulo,mediciones);

//uniendo 2 objetos anidados:
console.log("Uniendo 2 objetos anidados:");
const resultado3={...articulo, ...mediciones};
console.log(resultado3);