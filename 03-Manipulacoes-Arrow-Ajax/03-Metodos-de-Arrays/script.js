let lista = [
    "PHP",
    "JAVA",
    "PAYTON",
    "MEC"
];

//imprimi uma array numa unica frase

console.log(lista.toString());

//Junta uma array e uma unica string 

console.log(lista.join(" - "));

//Retorna posicao do item na lista 

console.log(lista.indexOf("JAVA"));

//remove o ultimo item do array

lista.pop();

console.log(lista);

//remove primeiro item do array

lista.shift();

console.log(lista);

//adiciona item ao array 

lista.push("PHP");

console.log(lista);

//remover item do array na posicao

lista.splice(1,1);

console.log(lista);

//concatenar array

let lista2 = [
    "Microsoft",
    "LINUX",
    "MEC"
];

let listaFinal = lista.concat(lista2);

console.log(listaFinal);

//ordernar em ordem alfabetica

console.log(listaFinal.sort());

//inverter a ordem alfabetica

console.log(listaFinal.reverse());

//Funcao mapear array

let numeros = [12, 9,14,8,17];

let result = numeros.map(function(item){
    return item * 2;
});

console.log(result);

//Funcao mapear filtros

let result2 = numeros.filter(function(item){
    if(item < 13){
        return true;
    }else{
        return false;
    }
});

console.log(result2);


// funcao que verifica se todos item estao de acordo traz true ou false;

result2 = numeros.every(function(item){
    return (item < 20)? true:false;
});

console.log(result2);

//funcao que verifica se um item esta de acordo ja traz true 

result2 = numeros.some(function(item){
    return (item < 9)? true:false;
});

console.log(result2);
