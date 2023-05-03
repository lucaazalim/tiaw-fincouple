# Anotações

## Convenções
- Todo o código deve ser escrito em **português**, incluindo nomes de variáveis, métodos, ids, classes etc;
- Deve-se utilizar o padrão `cammelCase` de nomeação de variáveis e métodos;
- A indentação do código deve ser feita usando **tabs**.

## Conteúdo base para páginas

``` html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nome da Página</title>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/86ad24bcb9.js" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="/style/custom_bootstrap.css">
    <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- FinCouple -->
    <script src="/script/script.js"></script>
    <link rel="stylesheet" href="/style/style.css">

</head>

<body>

    <div id="header"></div>

    <div class="container">

        <h1>Nome da Página</h1>
        <p>Descrição da página</p>

        <!-- Conteúdo da Página -->

    </div>

    <div id="footer"></div>

</body>

</html>
```

## Comandos úteis

Comando para aplicar as customizações de CSS ao Boostrap:
``` bash
sass ./style/custom_bootstrap.scss ./style/custom_bootstrap.css
```