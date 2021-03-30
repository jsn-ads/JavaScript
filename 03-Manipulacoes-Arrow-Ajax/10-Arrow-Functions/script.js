// funcao normal 

function somar(x, y){
    return x + y;
} 

console.log(somar(3,5));

//funcao com flexa 

let a = (x,y) => x+y;

console.log(a(3,9));

//se a funcao tiver apenas um parametro

let qt = nome => nome.length;

console.log(qt("Jose"));
