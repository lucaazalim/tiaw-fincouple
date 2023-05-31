import * as Categorias from "../categorias/categorias.js";
import * as Extrato from "../extrato/extrato.js";

const ctx1 = document.getElementById("grafico1");

let categorias = [];
let valores = [];

for (const categoria of Categorias.categorias().values()) {

	let valor = 0;

	for(const lancamento of Extrato.lancamentos().values()) {
		if(lancamento.categoria == categoria.id) {
			valor += lancamento.valor;
		}
	}

	categorias.push(categoria.nome);
	valores.push(valor);
	
}

new Chart(ctx1, {
  type: "pie",
  data: {
    labels: [...Categorias.categorias().values()].map((c) => c.nome),
    datasets: [
      {
        label: "R$ ",
        data: valores,
        borderWidth: 1,
      },
    ],
  },
});

