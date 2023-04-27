class Categoria {
    constructor(nome, icone) {
        this.nome = nome;
        this.icone = icone;
    }
}

var categorias_padrao = [
    new Categoria("Contas residenciais", "fa-house"),
    new Categoria("Viagem", "fa-plane"),
    new Categoria("Assinaturas", "fa-star")
];

var categorias;

function criarCategoria(...novasCategorias) {

    for (const categoria of novasCategorias) {

        let id = categorias.size + 1;
        categoria.id = id;

        console.log(`Criando a categoria ${categoria.nome} de ID ${id}...`);

        categorias.set(id, categoria);

    }

    guardarCategorias();
    exibirCategorias();

}

function apagarCategoria(id) {

    categorias.delete(id);

    guardarCategorias();
    exibirCategorias();

}

var categoriasLocalStorage = JSON.parse(localStorage.getItem('categorias'));

if (categoriasLocalStorage) {

    categorias = new Map(Object.entries(categoriasLocalStorage));

} else {

    categorias = new Map();
    criarCategoria(categorias_padrao);

}

function exibirCategorias() {

    $('#categorias').html("");

    for (const [id, categoria] of categorias.entries()) {

        var colunaFuncao = `
            <button id="btn-editar-categoria-${id}" type="button" class="btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="btn-apagar-categoria-${id}" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
        `;

        $('#categorias').append(`
            <tr>
                <td scope="row">${id}</td>
                <td>${categoria.nome}</td>
                <td><i class="fa-solid ${categoria.icone}"></i></td>
                <td>${colunaFuncao}</td>
            </tr>
        `);

    }

}

function carregarEventos() {

    $('#btn-confirmar-criacao').click(function () {

        if (!$('#form-criar-categoria')[0].checkValidity()) {
            alert("Preencha o formulário corretamente.");
            return;
        }

        let nome = $('#input-nome-categoria').val();
        let icone = $('#input-icone').val();

        let categoria = new Categoria(nome, icone);
        criarCategoria(categoria);

    });

    for (const [id, categoria] of categorias.entries()) {

        $(`#btn-apagar-categoria-${id}`).click(function () {

            apagarCategoria(id);
    
        });

        $(`#btn-editar-categoria-${id}`).click(function () {

            // TODO
    
        });

    }

}

function guardarCategorias() {
    localStorage.setItem('categorias', JSON.stringify(Object.fromEntries(categorias)));
}

exibirCategorias();
carregarEventos();