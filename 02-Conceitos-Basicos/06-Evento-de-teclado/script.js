function digitou(){
    console.log("vc digitou !!!");
}

function evento(e){
    console.log(e);

    if(e.keyCode == 13){
        alert(document.getElementById("campo").value);
    }
}