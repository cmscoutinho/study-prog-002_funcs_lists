// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
  console.log("Olá, mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
  return numero * 2;
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(a, b, c) {
  return (a + b + c) / 3;
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(a, b) {
  let maior = a >= b ? a : b;
  return maior;
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
  return numero ** 2;
}
