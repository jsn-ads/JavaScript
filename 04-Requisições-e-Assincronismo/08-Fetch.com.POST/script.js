async function enviar(){

    document.getElementById('posts').innerHTML = "Carregando...";

    let resquisicao = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo do post',
            userId: 4
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    let json = await resquisicao.json();

    console.log(json);
}