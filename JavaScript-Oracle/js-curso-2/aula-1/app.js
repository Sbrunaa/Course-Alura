let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio';

let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute(){
    console.log('O botão foi clicado');
}

function alertaBotao() {
    alert('Eu amo JS');
}

function promptBotao(){
   let nomeCidade = prompt('Qual a cidade do Brasil?');

    alert(`Estive em ${nomeCidade} e lembrei de você `);
}

function somaBotao(){
    let numero1 = parseInt(prompt('Digite um número inteiro: '));
    let numero2 = parseInt(prompt('Digite um segundo número inteiro: '));

    let soma = numero1 + numero2;

    alert(`A soma dos sois sumeros é ${soma}`);
}