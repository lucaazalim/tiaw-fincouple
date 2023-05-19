import * as Alerta from '../assets/script/alerta.js';
import * as Casais from '../cadastro/casais.js';
import * as Usuarios from '../cadastro/usuarios.js';
import * as Login from '../login/login.js';

// Dados dos usuários

let casalLogado = Login.casalLogado();

let usuario1 = Usuarios.usuarios.get(casalLogado.userId1);

$('#foto-usuario-1').attr('src', usuario1.foto);
$('#nome-1').html(usuario1.nome + " " + usuario1.sobrenome);
$('#usuario-1').html(usuario1.usuario);

let usuario2 = Usuarios.usuarios.get(casalLogado.userId2);

$('#nome-2').html(usuario2.nome + " " + usuario2.sobrenome);
$('#foto-usuario-2').attr('src', usuario2.foto);
$('#usuario-2').html(usuario2.usuario);

// Últimos lançamentos

import * as Categorias from '../categorias/categorias.js';
import * as Extrato from '../extrato/extrato.js';

let limit = 10;

for (const [id, lancamento] of [...Extrato.lancamentos.entries()].reverse()) {

	if(limit-- <= 0) {
		break;
	}

	// Data

	let splitData = lancamento.data.split("-");
	let labelData = splitData[2] + "/" + splitData[1] + "/" + splitData[0];

	// Categoria

	let categoria = Categorias.categorias.get(lancamento.categoria.toString());

	let corCategoria;
	let nomeCategoria;

	if (categoria) {
		corCategoria = categoria.cor;
		nomeCategoria = categoria.nome;
	} else {
		corCategoria = '#3d3d3d';
		nomeCategoria = 'Indefinida';
	}

	let labelCategoria = `<i class="fa-solid fa-circle" style="color: ${corCategoria}"></i> ${nomeCategoria}`

	$('#lancamentos').append(`
		<tr>
			<td>${labelData}</td>
			<td>${lancamento.nome}</td>
			<td>R$ ${lancamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
			<td>${labelCategoria}</td>
		</tr>
	`);

}