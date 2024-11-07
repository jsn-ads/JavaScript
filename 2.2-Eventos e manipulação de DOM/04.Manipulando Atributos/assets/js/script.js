manipuledElements = ()=>{
    let el = document.querySelector('input');

    // // getAttribute = pega atributo
    // let atr = el.getAttribute('placeholder');

    // hasAttribute = verifica se existe o atributo
    // let result = el.hasAttribute("name") ? 'sim' : 'não';

    // console.log("a: "+atr+" / "+"b: "+result);

    el.getAttribute('type') === 'text' ? el.setAttribute('type','password') : el.setAttribute('type','text'); 


}


let btn = document.querySelector("#submit");

btn.addEventListener("click",manipuledElements);