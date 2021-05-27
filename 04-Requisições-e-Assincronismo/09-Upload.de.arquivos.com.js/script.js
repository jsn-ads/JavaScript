async function carregarArquivo(){

    //pega a imagem
    let arquivo = document.getElementById('file').files[0];

    console.log(arquivo);

    //cria o corpo para envio

    let body = new FormData();

    body.append('title', 'Salvar imagem');
    body.append('arquivo',arquivo);

    let requisisao = await('http://localhost/projetos/JavaScript/04-Requisi%C3%A7%C3%B5es-e-Assincronismo/09-Upload.de.arquivos.com.js/imagens',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type':'multipart/form-data'
        }
    });

}