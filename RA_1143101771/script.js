class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    const imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(2);
  }

  classificarIMC() {
    const imc = this.calcularIMC();
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    return "Obesidade";
  }
}

const pessoas = [];

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const novaPessoa = new Pessoa(nome, peso, altura);
  pessoas.push(novaPessoa);
  atualizarTabela();

  document.getElementById("formulario").reset();
});

function atualizarTabela() {
  const tbody = document.getElementById("tabelaCorpo");
  tbody.innerHTML = "";

  pessoas.forEach(pessoa => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${pessoa.nome}</td>
      <td>${pessoa.peso}</td>
      <td>${pessoa.altura}</td>
      <td>${pessoa.calcularIMC()}</td>
      <td>${pessoa.classificarIMC()}</td>
    `;

    tbody.appendChild(linha);
  });
}
