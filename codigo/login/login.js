import * as Casais from '../cadastro/casais.js';
import * as Usuarios from '../cadastro/usuarios.js';

export function usuarioLogado() {
    let usuarioLogado = localStorage.getItem('usuario_logado');

    // Gambiarra para haver sempre um usuário logado por padrão para facilitar avaliação por pares
    if(!usuarioLogado) {
        return '1';
    }

    return Usuarios.usuarios.get(usuarioLogado);
}

export function definirUsuarioLogado(usuarioId) {
    localStorage.setItem('usuario_logado', usuarioId);
}

export function casalLogado() {
    let casalLogado = localStorage.getItem('casal_logado');

    // Gambiarra para haver sempre um usuário logado por padrão para facilitar avaliação por pares
    if(!casalLogado) {
        return '1';
    }

    return Casais.casais.get(casalLogado);
}

export function definirCasalLogado(casalId) {
    localStorage.setItem('casal_logado', casalId);
}