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
    new Lancamento("Aluguel", null, 1500, "2023-05-01", 8),
    new Lancamento("Academia", null, 99.99, "2023-05-02", 9),
    new Lancamento("Gasolina", null, 200, "2023-05-03", 8),
    new Lancamento("Material escolar", null, 80.00, "2023-05-04", 5),
    new Lancamento("Internet", null, 89.90, "2023-05-05", 8),
    new Lancamento("Presente", null, 100.00, "2023-05-06", 8),
    new Lancamento("Remédios", null, 50.00, "2023-05-07", 9),
    new Lancamento("Restaurante", null, 120.50, "2023-05-08", 3),
    new Lancamento("Conta de luz", null, 349.50, "2023-05-09", 4),
    new Lancamento("Conta de água", null, 68.20, "2023-05-10", 4),
    new Lancamento("Cinema", null, 40.00, "2023-05-11", 6),
    new Lancamento("Taxi", null, 35.00, "2023-05-12", 7),
    new Lancamento("Supermercado", null, 250.00, "2023-05-13", 7),
    new Lancamento("Passagem aérea", null, 800.00, "2023-05-14", 10),
    new Lancamento("Netflix", null, 29.90, "2023-05-15", 2),
    new Lancamento("Café da manhã", null, 25.00, "2023-05-16", 3),
    new Lancamento("Telefone", null, 60.00, "2023-05-18", 4),
    new Lancamento("Passeio de bicicleta", null, 15.00, "2023-05-19", 6),
    new Lancamento("Roupas", null, 200.00, "2023-05-20", 8)
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

export function carregar() {

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