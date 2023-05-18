import * as Alerta from '../assets/script/alerta.js';
import * as Casais from './casais.js';
import * as Usuarios from './usuarios.js';

const usuario_regex = /^[a-zA-Z0-9_]{4,16}$/;

$('#cadastrar').click(function (event) {

    let form = $('#form-cadastro')[0];

    if (!form.checkValidity()) {
        return;
    }

    event.preventDefault();

    let apelido = $('#apelido').val();

    let usuarios = [null, null];
    let casal = new Casais.Casal(apelido, null, null);

    Casais.criar(casal);

    for (let i = 0; i < usuarios.length; i++) {

        let nome = $(`#nome-${i + 1}`).val();
        let sobrenome = $(`#sobrenome-${i + 1}`).val();
        let usuario = $(`#usuario-${i + 1}`).val().toLowerCase();
        let senha = $(`#senha-${i + 1}`).val();
        let foto = '/assets/img/homem-2.png'; // TODO

        if (!usuario_regex.test(usuario)) {
            Alerta.alertar(`O usuário <b>${usuario}</b> é inválido. Insira um usuário de 4 a 16 caracteres, utilizando apenas letras, números e "_".`, 'danger');
            return;
        }

        if (Usuarios.buscarPorUsuario(usuario)) {
            Alerta.alertar(`O usuário <b>${usuario}</b> já existe!`, 'danger');
            return;
        }

        usuarios[i] = new Usuarios.Usuario(nome, sobrenome, usuario, senha, foto, casal.id);
        Usuarios.criar(usuarios[i]);

    }

    casal.userId1 = usuarios[0].id;
    casal.userId2 = usuarios[1].id;

    Casais.guardar();

    window.location.href = '../login';


});