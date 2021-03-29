let objeto = {
    nome : "Jose",
    sobreNome : "Neto",
    idade : 31,
    social : {
        social1 : "Instagran",
        social2 : "Facebook"
    },
    imprimir : function(){
        return `${this.nome} ${this.sobreNome}`;
    } 
};


let {nome, sobreNome, idade} = objeto;

console.log(nome , sobreNome, idade);

//caso queria definir nome de variavel ou deixa um valor definido caso nao tenha valor

let objeto2 = {
    nome : "Cristina",
    sobreNome2 : "Monik",
    social : {
        social1 : "Instagran",
        social2 : "Facebook"
    },
    imprimir : function(){
        return `${this.nome} ${this.sobreNome}`;
    } 
};


let {nome:XXX, sobreNome2, idade2 = 30} = objeto2;

console.log(XXX, sobreNome2, idade2);