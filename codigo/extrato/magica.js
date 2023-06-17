import * as Categorias from "../categorias/categorias.js";

const iconeMagica = '<i class="fa-solid fa-wand-magic-sparkles"></i>';

let carregando = false;
let botao = $("#magica-categoria-lancamento");

botao.html(iconeMagica);

$("#magica-categoria-lancamento").click(function () {

	let nome = $("#input-nome-lancamento").val();

	if (!nome || carregando) {
		return;
	}

	let inputCategoria = $("#input-categoria-lancamento");

	inputCategoria.prop("disabled", true);

	botao.html(
		'<div class="spinner-border spinner-border-sm" role="status"></div>'
	);

	carregando = true;

	let body = {
		nome: nome,
		categorias: Object.fromEntries(Categorias.categorias()),
	};

	fetch(
		"https://tiaw-fincouple-api.lucaazalim.repl.co/magica-categoria-lancamento",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		}
	)
		.then((response) => response.json())
		.then((data) => {

			inputCategoria.val(data);
			inputCategoria.prop("disabled", false);

			botao.html(iconeMagica);
			carregando = false;

		});

});
