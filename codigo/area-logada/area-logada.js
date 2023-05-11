var user = localStorage.getItem('user')
if(user){
document.getElementById('user1').innerHTML = user.nome
};


function exibirGastos() {
  const gastos = [
    {nome: "Mercado", valor: 150.00},
    {nome: "Netflix", valor: 49.90},
    {nome: "Gasolina", valor: 200.00},
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
}


function categorias(){
  var btnCategorias = document.getElementById("btn-categorias");
  btnCategorias.addEventListener("click", function() {
      window.location.href = "http://127.0.0.1:5500/categorias/index.html";
  });
}


