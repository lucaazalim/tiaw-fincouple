import * as Alerta from '../assets/script/alerta.js';
import * as Casais from './casais.js';
import * as Usuarios from './usuarios.js';
import * as Avatar from '../assets/script/avatar.js';

const usuario_regex = /^[a-zA-Z0-9_]{4,16}$/;

$('#cadastrar').click(function (event) {

    let form = $('#form-cadastro')[0];

    if (!form.checkValidity()) {
        return;
    }

    event.preventDefault();

    let apelido = $('#apelido').val();

    let usuarios = [null, null];

    for (let i = 0; i < usuarios.length; i++) {

        let nome = $(`#nome-${i + 1}`).val();
        let sobrenome = $(`#sobrenome-${i + 1}`).val();
        let usuario = $(`#usuario-${i + 1}`).val().toLowerCase();
        let senha = $(`#senha-${i + 1}`).val();

        let foto = Avatar.avatarAleatorio(usuario); // TODO

        usuarios[i] = new Usuarios.Usuario(nome, sobrenome, usuario, senha, foto, null);

    }

    for(let i = 0; i < usuarios.length; i++) {

        let usuario = usuarios[i];

        if (!usuario_regex.test(usuario.usuario)) {
            Alerta.alertar(`O usuário <b>${usuario.usuario}</b> é inválido. Insira um usuário de 4 a 16 caracteres, utilizando apenas letras, números e "_".`, 'danger');
            return;
        }

        if (Usuarios.buscarPorUsuario(usuario.usuario)) {
            Alerta.alertar(`O usuário <b>${usuario.usuario}</b> já existe!`, 'danger');
            return;
        }

    }

    let casal = new Casais.Casal(apelido, null, null);

    Casais.criar(casal);

    for(let i = 0; i < usuarios.length; i++) {

        let usuario = usuarios[i];

        usuario.casalId = casal.id;
        Usuarios.criar(usuario);

    }

    casal.userId1 = usuarios[0].id;
    casal.userId2 = usuarios[1].id;

    Casais.guardar();

    window.location.href = '../login';


});