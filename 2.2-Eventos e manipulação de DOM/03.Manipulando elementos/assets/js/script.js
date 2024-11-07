finish = () =>{
    const lista = document.querySelector("#lista");
    const ul = lista.querySelector('ul');

    // // innerHTML = monidifica a estrutura do html subistituindo o elemento
    // ul.innerHTML = "<li>Item Alterado</li>";

    // // append = adiciona apenas String sem precisar remover o elemento da memoria
    // ul.children[0].append(" (alterado)");

    // // document.createElement = cria um elemento
    // // appendChild = adiciona um elemento html no FINAL sem precisar remover elemento da memoria
    // // prepend = adiciona um elemento html no INICIO sem precisar remover elemento da memoria
    // let elemento = document.createElement("li");
    // elemento.innerHTML = "Novo item";
    // ul.appendChild(elemento);
    // ul.prepend(elemento);

    // // after = adiciona DEPOIS do elemento
    // // before = adiciona ANTES do elemento
    // let btn_1 = document.createElement("button");
    // btn_1.innerHTML = "Finalizar ?";
    // ul.after(btn_1);
    // ul.before(btn_1);



}


let btn_finish = document.querySelector("#btn_finish");
btn_finish.addEventListener("click", finish);
