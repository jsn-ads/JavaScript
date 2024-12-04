cssManipulation = () => {
    let li1 = document.querySelector('.li1');
    li1.style.backgroundColor = "#00ff";
    li1.style.fontSize = '30px';
}

let btn = document.querySelector('#btn');

btn.addEventListener('click',cssManipulation);