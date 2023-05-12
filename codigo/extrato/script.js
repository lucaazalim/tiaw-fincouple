import * as Categorias from '../categorias/categorias.js';
import * as Extrato from './extrato.js';

function exibirLancamentos() {

    $('#lancamentos').html("");

    for (const [id, lancamento] of Extrato.lancamentos.entries()) {

        // Data

        let splitData = lancamento.data.split("-");
        let labelData = splitData[2] + "/" + splitData[1] + "/" + splitData[0];

        // Categoria

        let categoria = Categorias.categorias.get(lancamento.categoria.toString());

        let corCategoria;
        let nomeCategoria;

        if (categoria) {
            corCategoria = categoria.cor;
            nomeCategoria = categoria.nome;
        } else {
            corCategoria = '#3d3d3d';
            nomeCategoria = 'Indefinida';
        }

        let labelCategoria = `<i class="fa-solid fa-circle" style="color: ${corCategoria}"></i> ${nomeCategoria}`

        $('#lancamentos').append(`
            <tr>
            <td>${labelData}</td>
                <td>${lancamento.nome}</td>
                <td>R$ ${lancamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>${labelCategoria}</td>
                
                <td colspan="1">
                    <button id="btn-editar-lancamento-${id}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-edicao-lancamento">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td colspan="1">
                    <button id="btn-remover-lancamento-${id}" type="button" class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `);

        $(`#btn-remover-lancamento-${id}`).click(function () {

            let nome = Extrato.lancamentos.get(id).nome;

            Extrato.removerLancamento(id);
            exibirLancamentos();

            alertar(`Lançamento <strong>${nome}</strong> removida com sucesso!`, "warning");

        });

        $(`#btn-editar-lancamento-${id}`).click(function () {

            let lancamento = Extrato.lancamentos.get(id);

            $('#input-lancamento-id').val(lancamento.id);
            $('#input-nome-lancamento').val(lancamento.nome);
            $('#input-descricao-lancamento').val(lancamento.descricao);
            $('#input-valor-lancamento').val(lancamento.valor);
            $('#input-data-lancamento').val(lancamento.data);
            $('#input-categoria-lancamento').val(lancamento.categoria);

            $('#btn-confirmar-edicao').html('Salvar');

        });

    }

}

$('#criar-lancamento').click(function () {
    
    $('#form-edicao-lancamento')[0].reset();
    
    document.getElementById('input-data-lancamento').valueAsDate = new Date();

    $('#btn-confirmar-edicao').html('Criar');

});

$(`#btn-confirmar-edicao`).click(function () {

    let formEdicaoLancamento = $('#form-edicao-lancamento')[0];

    if(!formEdicaoLancamento.checkValidity()) {
        return;
    }

    let id = $('#input-lancamento-id').val();
    let nome = $('#input-nome-lancamento').val();
    let descricao = $('#input-descricao-lancamento').val();
    let valor = parseFloat($('#input-valor-lancamento').val());
    let data = $('#input-data-lancamento').val();
    let categoria = parseInt($('#input-categoria-lancamento').val());

    if(!descricao) {
        descricao = null;
    }

    if (id) {

        let lancamento = Extrato.lancamentos.get(id);

        lancamento.nome = nome;
        lancamento.descricao = descricao;
        lancamento.valor = valor;
        lancamento.data = data;
        lancamento.categoria = categoria;

        Extrato.guardarLancamentos();
        exibirLancamentos();

        alertar(`Lançamento <strong>${nome}</strong> salvo com sucesso!`, "success");

    } else {

        let lancamento = new Extrato.Lancamento(nome, descricao, valor, data, categoria);

        console.log("Criando lançamento: ");
        console.log(lancamento);

        Extrato.criarLancamento(lancamento);

        exibirLancamentos();

        formEdicaoLancamento.reset();

        alertar(`Lancamento <strong>${nome}</strong> criada com sucesso!`, "success");

    }

    $('#modal-edicao-lancamento').modal('hide');

});

Categorias.carregarCategorias();
Extrato.carregarLancamentos();
exibirLancamentos();

for (const [id, categoria] of Categorias.categorias.entries()) {

    $('#input-categoria-lancamento').append(`<option value="${id}">${categoria.nome}</option>`);

}