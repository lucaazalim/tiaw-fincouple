import * as Alerta from '../assets/script/alerta.js';
import * as Casais from '../cadastro/casais.js';
import * as Usuarios from '../cadastro/usuarios.js';
import * as Login from './login.js';

$('#btn-entrar').click(function (event) {

    let form = $('#form-login')[0];

    if(!form.checkValidity()) {
        return;
    }

    event.preventDefault();

    let usuario = $('#usuario').val();
    let senha = $('#senha').val();

    let user = Usuarios.buscarPorUsuario(usuario);

    if(!user) {
        Alerta.alertar("Usuário não encontrado!", "danger");
        return;
    }

    if(user.senha != senha) {
        Alerta.alertar("Senha incorreta!", "danger");
        return;
    }

    Login.definirCasalLogado(user.casalId);
    Login.definirUsuarioLogado(user.id);
    
    window.location.href = '../area-logada';

});