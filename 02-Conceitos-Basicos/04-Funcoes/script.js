var titulo = document.getElementById("titulo");
var texto = document.getElementById("texto");

function alterar(){
    titulo.innerHTML = "Trocou titulo";
    texto.value = "Insira seu nome";
}

function somar(x, y){
    let total = x + y;
    document.write(total);
}

function multiplicar(x,y){

    let total = x * y;

    return total;

}

alterar();

somar(4,3);

var resultado = multiplicar(10,10);

alert(resultado);