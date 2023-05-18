export class Casal {
    constructor(apelido, userId1, userId2) {
        this.apelido = apelido;
        this.userId1 = userId1;
        this.userId2 = userId2;
    }
}

export var casais;

const casais_padrao = [
    new Casal("Amores", '1', '2')
];

export function criar(casal) {

    let id = casais.size + 1;
    casal.id = id.toString();

    console.log(`Criando a casal ${casal.apelido} de ID ${id}...`);

    casais.set(id.toString(), casal);

    guardar();

}

export function guardar() {
    localStorage.setItem('casais', JSON.stringify(Object.fromEntries(casais)));
}


export function carregar() {

    console.log("Carregando casais...");

    let casaisLocalStorage = JSON.parse(localStorage.getItem('casais'));

    if (casaisLocalStorage) {

        casais = new Map(Object.entries(casaisLocalStorage));

    } else {

        casais = new Map();

        for (const casal of casais_padrao) {
            criar(casal);
        }

    }

}