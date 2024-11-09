manipuledElements = ()=>{
    let el = document.querySelector('input');
    let btn = document.querySelector('#submit');

    console.log(btn);

    // // getAttribute = pega atributo
    // let atr = el.getAttribute('placeholder');

    // hasAttribute = verifica se existe o atributo
    // let result = el.hasAttribute("name") ? 'sim' : 'não';

    // console.log("a: "+atr+" / "+"b: "+result);

    // el.getAttribute('type') === 'text' ? el.setAttribute('type','password') : el.setAttribute('type','text'); 

    if(el.getAttribute('type') == 'text'){
        el.setAttribute('type','password');
        btn.innerText = "Mostrar Senha";
    }else{
        el.setAttribute('type','text');
        btn.innerText = "Ocultar Senha";
    }


}


let btn = document.querySelector("#submit");

btn.addEventListener("click",manipuledElements);