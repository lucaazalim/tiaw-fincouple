let btn = document.querySelector('.fa-eye')
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
    let usuario = document.querySelector('#usuario')
    let usuariolabel = document.querySelector('#usuariolabel')
    let senha = document.querySelector('#senha')
    let senhalabel = document.querySelector('#senhalabel')
    let Erro = document.querySelector('#Erro')
    let listaUser = []
    let userValid = {
        nome: '',
        sobrenome: '',
        usuario: '',
        senha: '',
        nome1: '',
        sobrenome1: '',
        usuario1: '',
        senha1: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) =>{
        if(usuario.value == item.usuario && senha.value == item.senha && usuario1.value == item.usuario1 && senha1.value == item.senha1){
            userValid = {
                nome: item.nome,
                sobrenome: item.sobrenome,
                usuario: item.usuario,
                senha: item.senha,
                nome1: item.nome1,
                sobrenome1: item.sobrenome1,
                usuario1: item.usuario1,
                senha1: item.senha1
            }
        }
    })
    if(usuario.value == userValid.usuario && senha.value == userValid.senha || usuario1.value == userValid.usuario1 && senha1.value == userValid.senha1){
        window.location.href='../area-logada'
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
    }else{
        usuariolabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhalabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        Erro.setAttribute('style', 'display: block')
        Erro.innerHTML = 'Usuário ou senha incorretos!'
        usuario.focus()
    }

}