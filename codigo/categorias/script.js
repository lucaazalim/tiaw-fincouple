import * as Categorias from './categorias.js';

function exibirCategorias() {

    console.log("Exibindo categorias...");

    $('#categorias').html("");

    for (const [id, categoria] of Categorias.categorias.entries()) {

        $('#categorias').append(`
            <tr>
                <td>${categoria.nome}</td>
                <td>
                    <div style="background-color: ${categoria.cor}; border-radius: 100%; width: 42px; height: 42px;"><br></div>
                </td>
                <td colspan="1">
                    <button id="btn-editar-categoria-${id}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-editar-categoria">
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

            let nome = Categorias.categorias.get(id).nome;

            Categorias.removerCategoria(id);
            exibirCategorias();

            alertar(`Categoria <strong>${nome}</strong> removida com sucesso!`, "warning");

        });

        $(`#btn-editar-categoria-${id}`).click(function () {

            let categoria = Categorias.categorias.get(id);

            $('#editar-categoria-id').val(categoria.id);
            $('#input-editar-nome-categoria').val(categoria.nome);
            $('#input-editar-cor-categoria').val(categoria.cor);

        });

    }

    $(`#btn-confirmar-edicao-categoria`).click(function () {

        let formEditarCategoria = $('#form-editar-categoria')[0];

        if (!formEditarCategoria.checkValidity()) {
            alert("Preencha o formulário corretamente.");
            return;
        }

        let id = $('#editar-categoria-id').val();
        let nome = $('#input-editar-nome-categoria').val();
        let cor = $('#input-editar-cor-categoria').val();

        if (!validarForm(nome, cor, "alerta-editar-categoria")) {
            return;
        }

        let categoria = Categorias.categorias.get(id);

        categoria.nome = nome;
        categoria.cor = cor;

        Categorias.guardarCategorias();
        exibirCategorias();

        $('#modal-editar-categoria').modal('hide');

        alertar(`Categoria <strong>${nome}</strong> salva com sucesso!`, "success");

    });

}

function validarForm(nome, cor, idParaAlerta) {

    if (!nome) {
        alertar(`Informe um <strong>nome</strong> para a categoria.`, "danger", idParaAlerta);
        return false;
    }

    if (nome.length > 32) {
        alertar(`O nome da categoria deve ter até <strong>32 caracteres</strong>.`, "danger", idParaAlerta);
        return false;
    }

    return true;

}

function carregarBotoes() {
    $('#btn-confirmar-criacao').click(function (event) {

        let formCriarCategoria = $('#form-criar-categoria')[0];

        if (!formCriarCategoria.checkValidity()) {
            return;
        }

        let nome = $('#input-nome-categoria').val();
        let cor = $('#input-cor-categoria').val();

        if (!validarForm(nome, cor, "alerta-criar-categoria")) {
            return;
        }

        let categoria = new Categorias.Categoria(nome, cor);

        Categorias.criarCategoria(categoria);
        exibirCategorias();

        formCriarCategoria.reset();

        $('#modal-criar-categoria').modal('hide');

        alertar(`Categoria <strong>${nome}</strong> criada com sucesso!`, "success");

    });
}

Categorias.carregarCategorias();
carregarBotoes();
exibirCategorias();