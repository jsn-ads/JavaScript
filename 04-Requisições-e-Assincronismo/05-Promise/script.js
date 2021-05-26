function medirTemperatura(){

    return new Promise(function(resolve,reject){

        console.log("pegando temperatura");

        setTimeout(function(){
            resolve('40 na sombra');
        },4000);
    });

}

let variavel = medirTemperatura();

variavel.then(function(resultado){
    console.log("temperatura: "+resultado);
});

variavel.catch(function(error){
    console.log("Erro inesperado");
});