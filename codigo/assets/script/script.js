import * as Login from '../../login/login.js';

carregarFavicon();
carregarHeader();
carregarBreadcrumbs();
carregarFooter();

function carregarFavicon() {

    let link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    link.href = '/assets/img/favicon.png?v=1';

}

function carregarHeader() {

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
                        <div class="col d-flex align-items-center">
                            <span id="nome-usuario-header" class="fw-bold">
                                ${usuarioLogado.usuario}
                            </span>
                        </div>
                        <div class="col ps-0">
                            <img src="${usuarioLogado.foto}" width="50px" height="50px" class="rounded-circle foto">
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

}

function carregarBreadcrumbs() {
    $(function () {
        $("#breadcrumbs").load("/assets/includes/breadcrumbs.html");
    });
}

function carregarFooter() {
    $(function () {
        $("#footer").load("/assets/includes/footer.html");
    });
}