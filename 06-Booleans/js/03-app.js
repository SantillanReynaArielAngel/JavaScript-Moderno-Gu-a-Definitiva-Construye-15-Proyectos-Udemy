// MEJORES MANERAS DE COMPRAR UN BOOLEANO
const autenticado=true;

if(autenticado){        //if(autenticado == true) esto es innecesario
    console.log('Usuario autenticado');
}else{
    console.log('Logeese por favor');
}

//comapracion ternaria
//            verdad    ?  SI                    :       NO
console.log(autenticado ? "Usuario autenticado2" : "Logeese por favor2");