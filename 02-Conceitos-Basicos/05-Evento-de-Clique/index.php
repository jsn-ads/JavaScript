<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evento de Clique</title>
</head>
<body>

    <h1 id="titulo" onmouseover="console.log('passou o mouse')" onmouseout="console.log('tirou o mouse')">Clique no Botao para trocar o texto</h1>

    <button onclick="messagem();">Clique aqui</button>

    <button onclick="this.innerHTML='clicou'">Clique aqui</button>

    <script src="script.js" type="text/javascript"></script>
</body>
</html>