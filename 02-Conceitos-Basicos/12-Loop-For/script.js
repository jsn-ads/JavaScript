let texto = "";

for (let i = 0; i < 10; i++) {
    texto += i+"<br/>";    
}

document.getElementById("texto").innerHTML = texto;

let array = [
    "Jose",
    "Neto",
    "Cristina",
    "Monik",
    "Giselle"
];

let texto2 = "<ul>";

for (let i in array) {
    texto2 += "<li>"+array[i]+"</li>";
}

texto2 += "</ul>";

document.getElementById("texto2").innerHTML = texto2;