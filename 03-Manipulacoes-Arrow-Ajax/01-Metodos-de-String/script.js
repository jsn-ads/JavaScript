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

//Trocando valores de uma String 

    let nomeAlterado = nome.replace("Alves de Souza", "Super");

    console.log(nomeAlterado);

//Caixa Alta e Caixa Baixa

    let n1 = nome.toUpperCase();

    console.log(n1);

    let n2 = nome.toLowerCase();

    console.log(n2);

//Retirar espaçamento 

    let e1 = "    Jose Neto  ";
    console.log(e1.trim());

//faz mesma funcao da substring 

    let c1 = "Neto";

    console.log(c1.charAt(2));

    console.log(c1[2]);

//Trasnforma uma string e uma array

    let lista = nome.split(" "); // " ", "," , "."

    console.log(lista);

    
