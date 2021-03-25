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
