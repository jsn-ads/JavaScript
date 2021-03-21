let dia = 9999;
let diaDasemana = "";

switch(dia){

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        diaDasemana = "meio da Semana";
        break;
    case 6:
    case 7:
        diaDasemana = "Final de Semana";
        break;
    default:
        diaDasemana = "Semana Bugada";
        break;
}

document.getElementById("campo").innerHTML = "Hoje e "+diaDasemana;