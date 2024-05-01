let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function botaoConsole() {
  console.log("O botão foi clicado.");
}

function loveJs() {
  console.log("Eu amo JS.");
}

function botaoCidade() {
  let cidade = prompt("Insira o nome de uma cidade brasileira.");
  console.log(`Estive em ${cidade} e lembrei de você.`);
}

function soma() {
  let num1 = parseInt(prompt("Digite um número."));
  let num2 = parseInt(prompt("Digite outro número."));
  let resultado = num1 + num2;
  console.log(`Resultado: ${resultado}.`);
}
