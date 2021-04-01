function receberNomes (...lista){
    console.log(lista);
}

console.log(receberNomes("Jose", "Cristina"));

console.log(receberNomes("Natalia","July","Lara","Ludmar","Leticia"));

//exemplo de usar spread junto com rest

function adicionar(conjunto , ...novoConjunto){
    let junçao = [
        ...conjunto,
        ...novoConjunto
    ];

    return junçao;
}

let conjunto_A = [
    "Jose ALves",
    "July Lara"
]

console.log(adicionar(conjunto_A, "Cristina", "Natalia"));

