var user = JSON.parse(localStorage.getItem('user'))

$('#nome').val(user.nome);
$('#sobrenome').val(user.sobrenome);
$('#senha').val(user.senha);
$('#nome1').val(user.nome1);
$('#sobrenome1').val(user.sobrenome1);
$('#senha1').val(user.senha1);

$('#salvar').click(function() {
    var user = JSON.parse(localStorage.getItem('user'))
    user.nome=$('#nome').val();
    user.sobrenome=$('#sobrenome').val();
    user.senha=$('#senha').val();
    user.nome1=$('#nome1').val();
    user.sobrenome1=$('#sobrenome1').val();
    user.senha1=$('#senha1').val();
    localStorage.setItem('user', JSON.stringify(user));
    alertar("Dados da conta salvos com sucesso!", "success");

});


