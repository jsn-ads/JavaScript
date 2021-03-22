let texto = "";

let i = 0;

while(i < 10){
    texto += i+"<br/>";
    i++;
}

document.getElementById("texto").innerHTML = texto;