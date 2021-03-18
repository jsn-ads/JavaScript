<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mudança de estilos</title>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
    
    <h1 id="titulo">Trocando CSS via javascript</h1>

    <button onclick="azul()">Azul</button>

    <button onclick="vermelho()">Vermelho</button>

    <button onclick="verde()">Verde</button>

    <div id="telefone" class="telefone">(62)99351-8323</div>

    <button onclick="mostrar(this)">Mostrar Telefone</button>

    <script src="script.js" type="text/javascript"></script>
</body>
</html>