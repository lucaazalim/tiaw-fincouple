import * as Categorias from "../categorias/categorias.js";
import * as Extrato from "../extrato/extrato.js";

const ctx2 = document.getElementById("grafico2");

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

new Chart(ctx2, {
  type: "bar",
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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
