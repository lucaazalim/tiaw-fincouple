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
  
      const divNome = document.createElement("div");
      divNome.innerText = gasto.nome;
  
      const divValor = document.createElement("div");
      divValor.innerText = `R$ ${gasto.valor.toFixed(2)}`;
  
      divGasto.appendChild(divNome);
      divGasto.appendChild(divValor);
      listaGastos.appendChild(divGasto);
    });
  }