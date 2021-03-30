// modulo 1

let lista = [
    "PHP",
    "JAVA",
    "JAVASCRIPT",
    "LARAVEL"
];

let [codigo1 , codigo2, codigo3, codigo4] = lista;

console.log(codigo1,codigo2,codigo3,codigo4);

//modulo 2

let[code, code2, code3, code4] = ['LARAVEL','JAVA','PHP','JAVASCRIPT'];

console.log(code, code2, code3, code4);

//modulo 3

function criar(){
    let array = ['PHP', 'LARAVEL', 'REACT'];
    return array;
}

let tecnologias = criar();

let [a,b,c] = tecnologias;

console.log(a,b,c);