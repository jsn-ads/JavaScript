//Contar quantidade de caracteres em uma string
let nome = "Jose Alves de Souza Neto";

console.log("total: "+nome.length);

//Verifica se possui tal caracter e em qual posição se encontra no array 

console.log(nome.indexOf('Souza'));

console.log(nome.indexOf('J'));

console.log(nome.indexOf('Cristina'));

if(nome.indexOf('Jose') > -1){
    console.log("Usuario encontrado");
}else{
    console.log("Usuario nao encontrado");
}