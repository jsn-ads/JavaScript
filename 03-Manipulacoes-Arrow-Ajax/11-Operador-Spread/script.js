// array

let array= [1,2,3,4];

let array2 = [...array,5,6,7,8];

console.log(array2);

//funcao que recebe um objeto e cria outro objeto 

nome = {
    nome: "Jose",
    sobreNome: "Neto",
    idade: 29
};


function adicionarInfo(nome){
    
    let dadosFull = {
        ...nome,
        cidade: "Goiania",
        estado: "Goias",
        pais: "Brasil"
    }

    return dadosFull;
}

console.log(adicionarInfo(nome));