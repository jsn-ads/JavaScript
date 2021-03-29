
function showTime(){

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+':'+m+':'+s;

    document.querySelector('.day').innerHTML = txt;

}

// setinterval 1000 vale 1 segundo

let timer;

function comecar(){
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer);
}

// setTimeout executa apenas uma vez e so executa apos tempo setado

let contagem;

function iniciar(){
    contagem = setTimeout(function(){
        document.querySelector('.texto').innerHTML = "Foguete foi Lancado";
    }, 3000);
}

function cancelar(){
    clearTimeout(contagem);
}


