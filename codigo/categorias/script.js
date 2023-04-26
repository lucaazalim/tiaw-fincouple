var db_categorias_padrao = {
    "data": [
        {
            "id": 1,
            "nome": "Contas residenciais",
            "icone": "fa-house"
        },
        {
            "id": 2,
            "nome": "Viagem",
            "icone": "fa-plane"
        },
        {
            "id": 3,
            "nome": "Assinaturas",
            "icone": "fa-star"
        },
    ]
}

const icones = [
    { id: "fa-home", unicode: "\uF015" },
    { id: "fa-bed", unicode: "\uF236" },
    { id: "fa-sofa", unicode: "\uF4A0" },
    { id: "fa-chair", unicode: "\uF6C9" },
    { id: "fa-table", unicode: "\uF6CC" },
    { id: "fa-lamp", unicode: "\uF0EB" },
    { id: "fa-couch", unicode: "\uF4A8" },
    { id: "fa-television", unicode: "\uF26C" },
    { id: "fa-fridge", unicode: "\uF26B" },
    { id: "fa-utensils", unicode: "\uF2E7" },
    { id: "fa-coffee", unicode: "\uF0F4" },
    { id: "fa-dumbbell", unicode: "\uF44B" },
    { id: "fa-shower", unicode: "\uF2CC" },
    { id: "fa-bath", unicode: "\uF2CD" },
    { id: "fa-toilet-paper", unicode: "\uF71E" },
    { id: "fa-washer", unicode: "\uF2F5" },
    { id: "fa-thermometer-full", unicode: "\uF2C7" },
    { id: "fa-fan", unicode: "\uF863" },
    { id: "fa-air-conditioner", unicode: "\uF8F4" },
    { id: "fa-window", unicode: "\uF40E" },
    { id: "fa-door-open", unicode: "\uF52B" },
    { id: "fa-curtain", unicode: "\uF5FA" },
    { id: "fa-plant", unicode: "\uF06C" },
    { id: "fa-dog", unicode: "\uF6D3" },
    { id: "fa-cat", unicode: "\uF6C4" },
  ];

var db = JSON.parse(localStorage.getItem('db_categorias'));

if (!db) {
    db = db_categorias_padrao;
}

function carregarIcones() {

    icones.forEach(function (icone, i) {
        $('#icones-selecionaveis').append(`
            <option value="${icone.id}" style="font-family: FontAwesome">${icone.unicode}</option>
        `);
    });

}

function exibirCategorias() {

    $('#categorias').html("");

    var colunaFuncao = `
        <button type="button" class="btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></button>
        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    `;

    for (var i = 0; i < db.data.length; i++) {

        let categoria = db.data[i];

        $('#categorias').append(`
            <tr>
                <td scope="row">${categoria.id}</td>
                <td>${categoria.nome}</td>
                <td><i class="fa-solid ${categoria.icone}"></i></td>
                <td>${colunaFuncao}</td>
            </tr>
        `);

    }

}

carregarIcones();
exibirCategorias();