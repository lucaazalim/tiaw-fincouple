let btn = document.querySelector('.fa-eye')
let btn1 = document.querySelector('.a')
let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false
let nome1 = document.querySelector('#nome1')
let labelnome1 = document.querySelector('#labelnome1')
let validnome1 = false
let sobrenome = document.querySelector('#sobrenome')
let labelsobrenome = document.querySelector('#labelsobrenome')
let validsobrenome = false
let sobrenome1 = document.querySelector('#sobrenome1')
let labelsobrenome1 = document.querySelector('#labelsobrenome1')
let validsobrenome1 = false
let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validusurario = false
let usuario1 = document.querySelector('#usuario1')
let labelusuario1 = document.querySelector('#labelusuario1')
let validusurario1 = false
let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false
let senha1 = document.querySelector('#senha1')
let labelsenha1 = document.querySelector('#labelsenha1')
let validsenha1 = false
let Erro = document.querySelector('#Erro')
let Certo = document.querySelector('#Certo')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome *mínimo de 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validnome = false
    }else{
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})
nome1.addEventListener('keyup', ()=>{
    if(nome1.value.length <= 2){
        labelnome1.setAttribute('style', 'color: red')
        labelnome1.innerHTML = 'Nome *mínimo de 3 caracteres'
        nome1.setAttribute('style', 'border-color: red')
        validnome1 = false
    }else{
        labelnome1.setAttribute('style', 'color: green')
        labelnome1.innerHTML = 'Nome'
        nome1.setAttribute('style', 'border-color: green')
        validnome1 = true
    }
})
sobrenome.addEventListener('keyup', ()=>{
    if(sobrenome.value.length <= 4){
        labelsobrenome.setAttribute('style', 'color: red')
        labelsobrenome.innerHTML = 'Sobrenome *mínimo de 5 caracteres'
        sobrenome.setAttribute('style', 'border-color: red')
        validsobrenome = false
    }else{
        labelsobrenome.setAttribute('style', 'color: green')
        labelsobrenome.innerHTML = 'Sobenome'
        sobrenome.setAttribute('style', 'border-color: green')
        validsobrenome = true
    }
})
sobrenome1.addEventListener('keyup', ()=>{
    if(sobrenome1.value.length <= 4){
        labelsobrenome1.setAttribute('style', 'color: red')
        labelsobrenome1.innerHTML = 'Sobrenome *mínimo de 5 caracteres'
        sobrenome1.setAttribute('style', 'border-color: red')
        validsobrenome1 = false
    }else{
        labelsobrenome1.setAttribute('style', 'color: green')
        labelsobrenome1.innerHTML = 'Sobenome'
        sobrenome1.setAttribute('style', 'border-color: green')
        validsobrenome1 = true
    }
})
usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 7){
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'Usuário *mínimo de 8 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validusurario    = false
    }else{
        labelusuario.setAttribute('style', 'color: green')
        labelusuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validusurario = true
    }
})
usuario1.addEventListener('keyup', ()=>{
    if(usuario1.value.length <= 7){
        labelusuario1.setAttribute('style', 'color: red')
        labelusuario1.innerHTML = 'Usuário *mínimo de 8 caracteres'
        usuario1.setAttribute('style', 'border-color: red')
        validusurario1    = false
    }else{
        labelusuario1.setAttribute('style', 'color: green')
        labelusuario1.innerHTML = 'Usuário'
        usuario1.setAttribute('style', 'border-color: green')
        validusurario1 = true
    }
})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'Senha *mínimo de 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    }else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})
senha1.addEventListener('keyup', ()=>{
    if(senha1.value.length <= 5){
        labelsenha1.setAttribute('style', 'color: red')
        labelsenha1.innerHTML = 'Senha *mínimo de 6 caracteres'
        senha1.setAttribute('style', 'border-color: red')
        validsenha1 = false
    }else{
        labelsenha1.setAttribute('style', 'color: green')
        labelsenha1.innerHTML = 'Senha'
        senha1.setAttribute('style', 'border-color: green')
        validsenha1 = true
    }
})
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})
btn1.addEventListener('click', ()=>{
    let inputSenha1 = document.querySelector('#senha1')
    if(inputSenha1.getAttribute('type') == 'password'){
        inputSenha1.setAttribute('type', 'text')
    }else{
        inputSenha1.setAttribute('type', 'password')
    }
})
function cadastrar(){
    if(validnome && validsenha && validsobrenome && validusurario && validnome1 && validsenha1 && validsobrenome1 && validusurario1){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                usuario: usuario.value,
                senha: senha.value,
                nome1: nome1.value,
                sobrenome1: sobrenome1.value,
                usuario1: usuario1.value,
                senha1: senha1.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        Certo.setAttribute('style', 'display: block')
        Certo.innerHTML = '<strong>Cadastrando usuário... .</strong>'
        Erro.setAttribute('style', 'display: none')
        Erro.innerHTML = ''
        setTimeout(()=>{
            window.location.href='./login   .html'
        },3000)
} else {
    Erro.setAttribute('style', 'display: block')
    Erro.innerHTML = '<strong>Preencha todos os campos!</strong>'
    Certo.setAttribute('style', 'display: none')
    Certo.innerHTML = ''
}
}