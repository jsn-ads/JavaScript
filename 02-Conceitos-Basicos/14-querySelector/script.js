document.querySelector("#titulo").innerHTML = "texto Trocado";
document.querySelector("#titulo").style.color = "yellow"; 

let texto = document.querySelector(".lista");

console.log(texto);

let array = document.querySelectorAll("ul.lista");


for(i = 0; i < array.length;i++){
    array[i].style.color = "blue";
}

let array2 = document.querySelectorAll("ol.lista");

for(i = 0; i < array2.length;i++){
    array2[i].style.color = "red";
}