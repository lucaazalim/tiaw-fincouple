import * as Casais from '../cadastro/casais.js';
import * as Usuarios from '../cadastro/usuarios.js';
import * as Login from '../login/login.js';

Casais.carregar();
Usuarios.carregar();

let casalLogado = Login.casalLogado();
let usuario1 = Usuarios.usuarios.get(casalLogado.userId1);
let usuario2 = Usuarios.usuarios.get(casalLogado.userId2);

$('#usuario-1').html(usuario1.nome + " " + usuario1.sobrenome);
$('#usuario-2').html(usuario2.nome + " " + usuario2.sobrenome);



// Carregar gastos

const gastos = [
	{ nome: "Mercado", valor: 150.00 },
	{ nome: "Netflix", valor: 49.90 },
	{ nome: "Gasolina", valor: 200.00 },
];

const listaGastos = document.getElementById("lista-gastos");

gastos.forEach((gasto) => {
	const divGasto = document.createElement("div");
	divGasto.classList.add("card", "my-2", "p-2");
	divGasto.style.fontSize = "24px";
	divGasto.style.color = "#f87000";
	divGasto.style.fontWeight = "bold";

	const divNome = document.createElement("div");
	divNome.innerText = gasto.nome;
	divNome.style.fontWeight = "bold";

	const divValor = document.createElement("div");
	divValor.innerText = `R$ ${gasto.valor.toFixed(2)}`;
	divValor.style.color = "black";

	divGasto.appendChild(divNome);
	divGasto.appendChild(divValor);
	listaGastos.appendChild(divGasto);
});

