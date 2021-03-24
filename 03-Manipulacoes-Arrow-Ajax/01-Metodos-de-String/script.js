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

//Pega o valor da posicao X a posicao Y conforme o exemplo 

    console.log(nome.slice(10,18));
    console.log(nome.slice(10));
    console.log(nome.slice(-4));

//faz a mesma coisa que slice porem mais limitado

    console.log(nome.substring(10,18));

//faz o que slice e substring faz e mais completo ,1 parametro( pega da onde quer comecar) 2 paramento(comeca a contar da foi marcado 1 parametro)

    console.log(nome.substr(5,3));
    
