let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = cc_gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute < numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é maior.");
    } else {
      exibirTextoNaTela("p", "O número secreto é menor.");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = listaNumerosSorteados.length;
  if (quantidadeElementosNaLista == numeroLimite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function cc_gerarNumeroAleatorio() {
  if (listaNumerosSorteados.length == numeroLimite) {
    listaNumerosSorteados = [];
  }
  let numeroSorteado;
  do {
    numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
  } while (listaNumerosSorteados.includes(numeroSorteado));
  listaNumerosSorteados.push(numeroSorteado);
  console.log(listaNumerosSorteados);
  return numeroSorteado;
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = cc_gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
