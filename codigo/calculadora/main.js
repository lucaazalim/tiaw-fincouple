// Função para calcular os juros compostos
function calcularJurosCompostos(event) {
    event.preventDefault();

    function formatarValor(valor) {
      return 'R$ ' + valor.toFixed(2).replace('.', ',');
    }

    var montante = parseFloat(document.getElementById('montante').value.replace(',', '').replace('R$ ', ''));
    var taxaJuros = parseFloat(document.getElementById('juros').value.replace('% ', ''));
    var prazo = parseInt(document.getElementById('prazo').value);

    var taxaDecimal = taxaJuros / 100;

    var jurosTotais = montante * (Math.pow(1 + taxaDecimal, prazo) - 1);

    var montanteTotal = montante + jurosTotais;

    document.querySelector('.emprestimo .value').textContent = formatarValor(montante);
    document.querySelector('.juros-totais .value').textContent = formatarValor(jurosTotais);
    document.querySelector('.montante-total .value').textContent = formatarValor(montanteTotal);
  }

  document.getElementById('form-juros').addEventListener('submit', calcularJurosCompostos);

  function limparCampos() {
    document.getElementById('montante').value = '';
    document.getElementById('juros').value = '';
    document.getElementById('prazo').value = '';
    document.querySelector('.emprestimo .value').textContent = 'R$ 0,00';
    document.querySelector('.juros-totais .value').textContent = 'R$ 0,00';
    document.querySelector('.montante-total .value').textContent = 'R$ 0,00';
  }

  document.querySelector('.reset').addEventListener('click', limparCampos);
  
  
// Função para calcular os valores da calculadora de férias
  function calcularValoresFerias(event) {
    event.preventDefault();
  
    const salarioBruto = parseFloat(document.getElementById('salario-bruto').value);
    const diasFerias = parseInt(document.getElementById('dias-ferias').value);
    const abonoPecuniario = document.getElementById('abono-pecuniario').value;
    const adiantaDecimoTerceiro = document.getElementById('adiantamento-parcela-decimo').value;
    const dependentes = parseInt(document.getElementById('numero-dependentes').value);
    const mediaHorasExtras = parseFloat(document.getElementById('media-hora-extra').value) || 0;
  
    let valorFerias = (salarioBruto / 30) * diasFerias;
    let valorAbono = abonoPecuniario === 'sim' ? (valorFerias / 3) : 0;
    let valorDecimoTerceiro = adiantaDecimoTerceiro === 'sim' ? (salarioBruto / 12) : 0;
    let valorDependentes = dependentes * 100;
    let valorHorasExtras = mediaHorasExtras * salarioBruto;
  
    let valorTotal = valorFerias + valorAbono + valorDecimoTerceiro + valorDependentes + valorHorasExtras;
  
    document.getElementById('result').innerHTML = `
      <h4>Resultado:</h4>
      <p>Valor das Férias: R$ ${valorFerias.toFixed(2)}</p>
      <p>Valor do Abono Pecuniário: R$ ${valorAbono.toFixed(2)}</p>
      <p>Valor do 13º Adiantado: R$ ${valorDecimoTerceiro.toFixed(2)}</p>
      <p>Valor por Dependentes: R$ ${valorDependentes.toFixed(2)}</p>
      <p>Valor das Horas Extras: R$ ${valorHorasExtras.toFixed(2)}</p>
      <h5>Valor Total: R$ ${valorTotal.toFixed(2)}</h5>
    `;
  }

  document.getElementById('form-ferias').addEventListener('submit', calcularValoresFerias);


// Função para calcular os valores da calculadora de investimentos
  function calcularValoresInvestimentos(event) {
    event.preventDefault();
  
    const form = document.getElementById("form-investments");
    const totalValueElement = form.querySelector(".valor-bruto .value");
    const investedValueElement = form.querySelector(".valor-investido .value");
    const interestValueElement = form.querySelector(".valor-juros .value");

    const investmentType = form.querySelector("input[name='investment-type']:checked").value;
    const investmentFixedType = form.querySelector("input[name='investment-fixed-type']:checked").value;
    const initialInvestment = parseFloat(form.querySelector("#form-invest-initial-investment").value);
    const monthlyInvestment = parseFloat(form.querySelector("#form-invest-month-investment").value);
    const period = parseInt(form.querySelector("#form-invest-period").value);
    const profitability = parseFloat(form.querySelector("#form-invest-profitability").value);

    const fixedType = form.querySelector('input[name="investment-fixed-type"]:checked').value;

    let totalValue = 0;
    if (investmentType === "cdb-lc") {
      // Cálculos para CDB/LC/Títulos públicos/Debêntures
      if (fixedType === "pre") {
        // Cálculos para pré-fixado
        totalValue = initialInvestment + (monthlyInvestment * period) + (initialInvestment * profitability * period);
      } else if (fixedType === "pos") {
        // Cálculos para pós-fixado
        totalValue = initialInvestment + (monthlyInvestment * period) + (initialInvestment * (profitability / 100) * period);
      } else if (fixedType === "ipca") {
        // Cálculos para IPCA
        const ipca = parseFloat(form.querySelector("#form-invest-ipca").value);
        totalValue = initialInvestment + (monthlyInvestment * period) + (initialInvestment * (profitability / 100) * period) + (initialInvestment * (ipca / 100) * period);
      }
    } else if (investmentType === "lci-lca") {
      // Cálculos para LCI/LCA
    } else if (investmentType === "tesouro") {
      // Cálculos para Tesouro
    } 
    totalValueElement.textContent = "R$" + totalValue.toFixed(2);

    const investedValue = initialInvestment + (monthlyInvestment * period);
    investedValueElement.textContent = "R$" + investedValue.toFixed(2);
  
    const interestValue = totalValue - investedValue;
    interestValueElement.textContent = "R$" + interestValue.toFixed(2);
  }

  document.getElementById('form-investments').addEventListener('submit', calcularValoresInvestimentos);  