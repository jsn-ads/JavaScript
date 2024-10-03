let listName = [
    "Neto",
    "Cristina",
    "Giovanna",
    "Giselle"
]

let newListName = listName.filter((item) => item.length > 7);

console.log(newListName);

// return true ou false se todos itens do array comprir os requisitos

let x = listName.every((item) => item.length < 5);

if(x){
    console.log(`todos os itens tem mais de 5 letras`);
}else{
    console.log(`não são todos itens que tem mais de 5 letras`);
}

// return true ou false se apenas 1 dos itens do array compri os requisitos

let y = listName.some((item) => item.length < 5);

if(y){
    console.log(`alguns itens tem mais de 5 letras`);
}else{
    console.log(`nenhum item tem 5 letras`);
}


// Encontra um valor espeficio no array

if(listName.includes('Neto')){
    console.log(`Nome encontrado`);
}else{
    console.log(`Nada encontrado`);
}