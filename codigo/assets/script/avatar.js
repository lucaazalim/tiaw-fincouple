export function avatarAleatorio(usuario) {
    return 'https://robohash.org/' + usuario + new Date().getSeconds();
}