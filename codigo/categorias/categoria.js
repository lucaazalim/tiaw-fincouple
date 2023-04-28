class Categoria {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

var categorias_padrao = [
    new Categoria("Contas residenciais", "#32a852"),
    new Categoria("Viagem", "#3a32a8"),
    new Categoria("Assinaturas", "#ffaa00")
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

function pegarCategoria(id) {
    return categorias.get(id);
}

function removerCategoria(id) {

    console.log(`Removendo categoria de ID ${id}...`)

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
                <td scope="row">${id}</td>
                <td>${categoria.nome}</td>
                <td>
                    <div style="background-color: ${categoria.cor}; border-radius: 100%; width: 25px; height: 25px;"><br></div>
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

            console.log("Debug " + id);

            removerCategoria(id);

        });

        $(`#btn-editar-categoria-${id}`).click(function () {

            let categoria = pegarCategoria(id);

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

        let categoria = pegarCategoria(id);

        categoria.nome = nome;
        categoria.cor = cor;

        guardarCategorias();
        exibirCategorias();

    });

}

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

$('#btn-confirmar-criacao').click(function () {

    let formCriarCategoria = $('#form-criar-categoria')[0];

    if (!formCriarCategoria.checkValidity()) {
        alert("Preencha o formulário corretamente.");
        return;
    }

    let nome = $('#input-nome-categoria').val();
    let cor = $('#input-cor-categoria').val();

    let categoria = new Categoria(nome, cor);
    criarCategoria(categoria);

    formCriarCategoria.reset();

});

exibirCategorias();