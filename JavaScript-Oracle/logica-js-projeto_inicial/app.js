alert('Boas vindas ao nosso site!');

let name = 'Lua';
let age = 25;
let numberOfBandages = 100;
let mensageOfError = 'Erro! Preencha todos os campos';

alert(mensageOfError);

let nameUser = prompt('Digite seu nome: ');
let ageUser = prompt('Digte sua idade: ');

if(ageUser >= 18){
    alert(nameUser + ' Você pode tirar a a habilitação!');
}else{
    alert(nameUser + ' Você não pode tirar a habilitação.');
}
