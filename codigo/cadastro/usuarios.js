export class Usuario {
    constructor(nome, sobrenome, usuario, senha, foto, casalId) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.usuario = usuario;
        this.senha = senha;
        this.foto = foto;
        this.casalId = casalId;
    }
}

export var usuarios;

const usuarios_padrao = [
    new Usuario('João', 'Silva', 'joaosilva', '123', '/assets/img/homem.png', '1'),
    new Usuario('Maria', 'Silva', 'mariasilva', '123', '/assets/img/mulher.png', '1')
];

export function buscarPorUsuario(usuario) {

    for (let user of usuarios.values()) {
        if (user.usuario.toLowerCase() == usuario.toLowerCase()) {
            return user;
        }
    }

    return null;

}

export function criar(usuario) {

    let id = usuarios.size + 1;
    usuario.id = id.toString();

    console.log(`Criando a usuario ${usuario.nome} de ID ${id}...`);

    usuarios.set(id.toString(), usuario);

    guardar();

}

export function guardar() {
    localStorage.setItem('usuarios', JSON.stringify(Object.fromEntries(usuarios)));
}


export function carregar() {

    if (usuarios) {
        return;
    }

    console.log("Carregando usuarios...");

    let usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios'));

    if (usuariosLocalStorage) {

        usuarios = new Map(Object.entries(usuariosLocalStorage));

    } else {

        usuarios = new Map();

        for (const usuario of usuarios_padrao) {
            criar(usuario);
        }

    }

}

carregar();