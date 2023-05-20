import * as Login from '../login/login.js';

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

function chaveLocalStorage() {
    let casalLogado = Login.casalLogado();
    return 'categorias_' + casalLogado.id;
}

export function categorias() {
    
    let json = localStorage.getItem(chaveLocalStorage());
    let map = json ? new Map(Object.entries(JSON.parse(json))) : new Map();
    return map;

}

export function criar(categoria) {

    let map = categorias();
    let id = map.size + 1;
    
    categoria.id = id;

    console.log(`Criando a categoria ${categoria.nome} de ID ${id}...`);

    map.set(id.toString(), categoria);
    guardar(map);

}

export function remover(id) {

    let map = categorias();
    map.delete(id);
    guardar(map);

}

export function guardar(map) {
    localStorage.setItem(chaveLocalStorage(), JSON.stringify(Object.fromEntries(map)));
}

if(!localStorage.getItem(chaveLocalStorage())) {

    console.log("Criando categorias padrão...");

    for (const categoria of categorias_padrao) {
        criar(categoria);
    }
    
}