// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso) {
  return peso / altura ** 2;
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
  let produto = 1;
  while (numero > 0) {
    produto *= numero;
    numero--;
  }
  return produto;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteParaReal(dolar) {
  return dolar * 4.8;
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function salaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  alert(`Área: ${area} | Perímetro: ${perimetro}`);
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function salaCircular(raio) {
  let area = 3.14 * raio ** 2;
  let perimetro = 2 * 3.14 * raio;
  alert(`Área: ${area} | Perímetro: ${perimetro}`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  let contador = 0;
  while (contador <= 10) {
    alert(`${numero} * ${contador} = ${numero * contador}`);
    contador++;
  }
}
