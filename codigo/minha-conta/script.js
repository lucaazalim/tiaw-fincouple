import * as Casais from '../cadastro/casais.js';
import * as Usuarios from '../cadastro/usuarios.js';
import * as Login from '../login/login.js';

Casais.carregar();
Usuarios.carregar();

let usuarioLogado = Login.usuarioLogado();

$('#nome').val(usuarioLogado.nome);
$('#sobrenome').val(usuarioLogado.sobrenome);
$('#senha').val(usuarioLogado.senha);

let casalLogado = Login.casalLogado();

$('#apelido').val(casalLogado.apelido);

$('#btn-salvar').click(function(event) {

    let form = $('#form-minha-conta')[0];

    if(!form.checkValidity()) {
        return;
    }

    event.preventDefault();

    let apelido = $('#apelido').val();

    casalLogado.apelido = apelido;

    let nome = $('#nome').val();
    let sobrenome = $('#sobrenome').val();
    let senha = $('#senha').val();

    usuarioLogado.nome = nome;
    usuarioLogado.sobrenome = sobrenome;
    usuarioLogado.senha = senha;

    Casais.guardar();
    Usuarios.guardar();

    alertar("Usuário atualizado com sucesso!", "success");

});