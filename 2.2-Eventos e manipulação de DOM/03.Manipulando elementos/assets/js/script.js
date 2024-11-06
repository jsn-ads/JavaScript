finish = () =>{
    const lista = document.querySelector("#lista");
    const ul = lista.querySelector('ul');
    ul.innerHTML = "<li>Item Alterado</li>";
}


let btn_finish = document.querySelector("#btn_finish");
btn_finish.addEventListener("click", finish);
