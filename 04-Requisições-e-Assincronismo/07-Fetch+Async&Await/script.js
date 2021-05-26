async function carregarPosts(){

    document.getElementById('posts').innerHTML = "carregando...";

    let requisicao = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await requisicao.json()
    criarLista(json);

}


function criarLista(lista){

    let html = '';

    for(let i in lista){

        html += "<h3>"+lista[i].title+"</h3>";
        html += lista[i].body+'<br/>';
        html += "<hr/>";
    }

    document.getElementById('posts').innerHTML = html;

}