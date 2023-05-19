export class Categoria {
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

export var categorias;

export function criarCategoria(categoria) {

    let id = categorias.size + 1;
    categoria.id = id;

    console.log(`Criando a categoria ${categoria.nome} de ID ${id}...`);

    categorias.set(id.toString(), categoria);

    guardarCategorias();

}

export function removerCategoria(id) {

    categorias.delete(id);
    guardarCategorias();

}

export function guardarCategorias() {
    localStorage.setItem('categorias', JSON.stringify(Object.fromEntries(categorias)));
}

function carregar() {

    if (categorias) {
        return;
    }

    console.log("Carregando categorias...");

    let categoriasLocalStorage = JSON.parse(localStorage.getItem('categorias'));

    if (categoriasLocalStorage) {

        categorias = new Map(Object.entries(categoriasLocalStorage));

    } else {

        categorias = new Map();

        for (const categoria of categorias_padrao) {
            criarCategoria(categoria);
        }

    }

}

carregar();