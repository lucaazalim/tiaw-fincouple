import * as Alerta from '../assets/script/alerta.js';
import * as Categorias from './categorias.js';

function exibirCategorias() {

    console.log("Exibindo categorias...");

    $('#categorias').html("");

    for (const [id, categoria] of Categorias.categorias().entries()) {

        $('#categorias').append(`
            <tr>
                <td>${categoria.nome}</td>
                <td>
                    <div style="background-color: ${categoria.cor}; border-radius: 100%; width: 42px; height: 42px;"><br></div>
                </td>
                <td colspan="1">
                    <button id="btn-editar-categoria-${id}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-edicao-categoria">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td colspan="1">
                    <button id="btn-remover-categoria-${id}" type="button" class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `);

        $(`#btn-remover-categoria-${id}`).click(function () {

            let nome = Categorias.categorias().get(id).nome;

            Categorias.remover(id);
            exibirCategorias();

            Alerta.alertar(`Categoria <strong>${nome}</strong> removida com sucesso!`, "warning");

        });

        $(`#btn-editar-categoria-${id}`).click(function () {

            let categoria = Categorias.categorias().get(id);

            $('#input-id-categoria').val(categoria.id);
            $('#input-nome-categoria').val(categoria.nome);
            $('#input-cor-categoria').val(categoria.cor);

            $('#titulo-modal').html('Editar categoria');
            $('#btn-confirmar').html('Salvar');

        });

    }

}

$('#criar-categoria').click(function () {
    
    $('#form-edicao-categoria')[0].reset();
    $('#titulo-modal').html('Criar categoria');
    $('#btn-confirmar').html('Criar');

});

$('#btn-confirmar').click(function (event) {

    let formCriarCategoria = $('#form-edicao-categoria')[0];

    if (!formCriarCategoria.checkValidity()) {
        return;
    }

    event.preventDefault();

    let id = $('#input-id-categoria').val();
    let nome = $('#input-nome-categoria').val();
    let cor = $('#input-cor-categoria').val();

    let idAlerta = 'alerta-editar-categoria';

    if (nome.length > 32) {
        Alerta.alertar(`O nome da categoria deve ter até <strong>32 caracteres</strong>.`, "danger", idAlerta);
        return false;
    }

    if (id) {

        let categoria = Categorias.categorias().get(id);

        categoria.nome = nome;
        categoria.cor = cor;

        Categorias.guardar();
        exibirCategorias();

        Alerta.alertar(`Categoria <strong>${nome}</strong> salva com sucesso!`, "success");

    } else {

        let categoria = new Categorias.Categoria(nome, cor);

        Categorias.criar(categoria);
        exibirCategorias();

        Alerta.alertar(`Categoria <strong>${nome}</strong> criada com sucesso!`, "success");

    }

    formCriarCategoria.reset();
    $('#modal-edicao-categoria').modal('hide');

});

exibirCategorias();