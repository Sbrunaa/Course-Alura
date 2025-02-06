alert('Boas vinda ao jogo do número secreto');
let numberMax = 30;
let numberSecret = parseInt(Math.random() * numberMax + 1);
let secretNumber;
let attempts = 1;

while(secretNumber != numberSecret){
    secretNumber = prompt(`EScolha um número entre 1 e ${numberMax}`);

    if( secretNumber == numberSecret){
        break;
       
    }else{
       if(secretNumber > numberSecret){
        alert(`O número secreto é menor que ${secretNumber}`);
       }else{
        alert(`O número secreto é maior que ${secretNumber} `);
       }
       attempts++;
    }
}

/*prepador ternário */
let wordAttempts
= attempts > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numberSecret} com uma ${attempts} ${wordAttempts}`);

