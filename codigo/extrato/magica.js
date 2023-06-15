import * as Categorias from '../categorias/categorias.js';

$('#magica-categoria-lancamento').click(function () {

    let nome = $('#input-nome-lancamento').val();

    if(!nome) {
        return;
    }

    let body = {
        "nome": $('#input-nome-lancamento').val(),
        "categorias": Object.fromEntries(Categorias.categorias())
    }

    fetch('https://tiaw-fincouple-api.lucaazalim.repl.co/magica-categoria-lancamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      $('#input-categoria-lancamento').val(data);
    });

});