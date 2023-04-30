class Categoria {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

var categorias_padrao = [
    new Categoria("Animais de Estimação", "#FF8C00"),
    new Categoria("Assinaturas", "#800080"),
    new Categoria("Bares e Restaurantes", "#FF0000"),
    new Categoria("Contas residenciais", "#008000"),
    new Categoria("Educação", "#0000FF"),
    new Categoria("Lazer", "#FFFF00"),
    new Categoria("Mercado", "#FF4500"),
    new Categoria("Outros", "#808080"),
    new Categoria("Saúde", "#00BFFF"),
    new Categoria("Viagem", "#8B4513")
];

var categorias;

function criarCategoria(categoria) {

    let id = categorias.size + 1;
    categoria.id = id;

    console.log(`Criando a categoria ${categoria.nome} de ID ${id}...`);

    categorias.set(id.toString(), categoria);

    guardarCategorias();
    exibirCategorias();

}

function removerCategoria(id) {

    categorias.delete(id);

    guardarCategorias();
    exibirCategorias();

}

function guardarCategorias() {
    localStorage.setItem('categorias', JSON.stringify(Object.fromEntries(categorias)));
}

function exibirCategorias() {

    $('#categorias').html("");

    for (const [id, categoria] of categorias.entries()) {

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

            let nome = categorias.get(id).nome;

            removerCategoria(id);
            alertar(`Categoria <strong>${nome}</strong> removida com sucesso!`, "warning");

        });

        $(`#btn-editar-categoria-${id}`).click(function () {

            let categoria = categorias.get(id);

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

        if(!validarForm(nome, cor, "alerta-editar-categoria")) {
            return;
        }

        let categoria = categorias.get(id);

        categoria.nome = nome;
        categoria.cor = cor;

        guardarCategorias();
        exibirCategorias();

        $('#modal-editar-categoria').modal('hide');

        alertar(`Categoria <strong>${nome}</strong> salva com sucesso!`, "success");

    });

}

function validarForm(nome, cor, idParaAlerta) {

    if(!nome) {
        alertar(`Informe um <strong>nome</strong> para a categoria.`, "danger", idParaAlerta);
        return false;
    }

    if(nome.length > 32) {
        alertar(`O nome da categoria deve ter até <strong>32 caracteres</strong>.`, "danger", idParaAlerta);
        return false;
    }

    return true;

}

$('#btn-confirmar-criacao').click(function (event) {

    let formCriarCategoria = $('#form-criar-categoria')[0];

    if (!formCriarCategoria.checkValidity()) {
        return;
    }

    let nome = $('#input-nome-categoria').val();
    let cor = $('#input-cor-categoria').val();

    if(!validarForm(nome, cor, "alerta-criar-categoria")) {
        return;
    }

    let categoria = new Categoria(nome, cor);
    criarCategoria(categoria);

    formCriarCategoria.reset();
    $('#modal-criar-categoria').modal('hide');

    alertar(`Categoria <strong>${nome}</strong> criada com sucesso!`, "success");

});

var categoriasLocalStorage = JSON.parse(localStorage.getItem('categorias'));

if (categoriasLocalStorage) {

    categorias = new Map(Object.entries(categoriasLocalStorage));

} else {

    categorias = new Map();
    console.log("Criando categorias padrão...");
    for (const categoria of categorias_padrao) {
        criarCategoria(categoria);
    }

}

exibirCategorias();