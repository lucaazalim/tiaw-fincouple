export class Lancamento {
    constructor(nome, descricao, valor, data, categoria) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
        this.categoria = categoria;
    }
}

var lancamentos_padrao = [
    new Lancamento("Conta de luz", null, 300.00, "2023-05-10", 4)
];

export var lancamentos;

export function criarLancamento(lancamento) {

    let id = lancamentos.size + 1;
    lancamento.id = id;

    console.log(`Criando a lançamento ${lancamento.nome} de ID ${id}...`);

    lancamentos.set(id.toString(), lancamento);

    guardarLancamentos();

}

export function removerLancamento(id) {

    lancamentos.delete(id);
    guardarLancamentos();

}

export function guardarLancamentos() {
    localStorage.setItem('extrato', JSON.stringify(Object.fromEntries(lancamentos)));
}

export function carregarLancamentos() {

    let extratoLocalStorage = JSON.parse(localStorage.getItem('extrato'));

    if (extratoLocalStorage) {

        lancamentos = new Map(Object.entries(extratoLocalStorage));

    } else {

        lancamentos = new Map();

        for (const lancamento of lancamentos_padrao) {
            criarLancamento(lancamento);
        }

    }

}