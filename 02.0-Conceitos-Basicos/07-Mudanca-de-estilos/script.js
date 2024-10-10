function azul(){
    clear();
    document.getElementById("titulo").classList.add('azul');   
}

function vermelho(){
    clear();
    document.getElementById("titulo").classList.add('vermelho');   
}

function verde(){
    clear();
    document.getElementById("titulo").classList.add('verde');   
}

function clear(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

function mostrar(e){
    e.style.display = "none";
    document.getElementById("telefone").style.display = "block";
}