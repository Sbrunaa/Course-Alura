alert('Boas vinda ao jogo do número secreto');
let numberSecret = 24;
let secretNumber = prompt('Escolha um número entre 1 e 30');
console.log(numberSecret);

if( secretNumber == numberSecret){
    alert(`Isso ai! Você descobriu o número secreto ${numberSecret}`);
}else{
    alert('Que pena você errou!');
}