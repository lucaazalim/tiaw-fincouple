import * as Usuarios from '../../cadastro/usuarios.js';
import * as Login from '../../login/login.js';

Usuarios.carregar();

let usuarioLogado = Login.usuarioLogado();

$(function () {

    let headerHtml = '';

    headerHtml += `
        <header>
            <nav class="navbar bg-fincouple mb-5">
                <div class="container">

                    <a class="navbar-brand" href="/">
                        <img src="/assets/img/logo.png" alt="FinCouple" width="200px">
                    </a>
    `;

    if (usuarioLogado) {
        headerHtml += `
            <a href="/area-logada" class="text-decoration-none">
                <div class="row">
                    <div class="col">
                        <p id="nome-usuario-header" class="mx-3 fw-bold">
                            ${usuarioLogado.usuario}
                        </p>
                    </div>
                    <div class="col">
                        <img src="${usuarioLogado.foto}" width="50px" height="50px" class="rounded-circle">
                    </div>
                </div>
            </a>
        `;
    }

    headerHtml += `
                </div>
            </nav>
        </header>
    `;

    $("#header").html(headerHtml);

});

$(function () {
    $("#breadcrumbs").load("/assets/includes/breadcrumbs.html");
});

$(function () {
    $("#footer").load("/assets/includes/footer.html");
});