//Desestructuracion de objetos anidados
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



//1) Sacando nombre e iformacion del objeto producto:
// const {nombre, informacion}=producto;
// console.log(nombre);
// console.log(informacion);


//2) Sacando nombre y fabricacion del objeto producto
//Notacion: const { proiedad_raiz, propiedad_objecto:{pripiedad}}=objecto
//nota: solo se creara la variable fabricacion y no asi informacion
// const {nombre, informacion:{fabricacion}}=producto;
// console.log(nombre);
// console.log(fabricacion);
//si queremos imprimir informacion nos dara error(not  defined):
// console.log(informacion);

//3) Sacando noombre y pais del objecto producto
//Notacion: const { proiedad_raiz, propiedad_objecto:{pripiedad_objeto:{propiedad}}}=objecto
//Nota: Como el anteior ejemplo solo se onbtendra pais y no asi informacion y fabricaion 
const {nombre, informacion:{fabricacion:{pais}}}=producto;
console.log(nombre);
console.log(pais);