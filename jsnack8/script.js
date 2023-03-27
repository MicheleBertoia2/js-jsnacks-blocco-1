// JSnack 8
//  Chiedi un numero di 4 cifre all’utente
//  e calcola la somma di tutte le cifre che compongono il numero.

const output = document.getElementById('output');

const numChiesto = prompt('inserisci un numero di 4 cifre')
const arrayNum = [];

arrayNum.push(numChiesto);
console.log(arrayNum);

const arrayString = arrayNum.join('');
console.log(arrayString);
const arrayNumSplit = arrayString.split('');
console.log(arrayNumSplit);

let somma = 0;
for (let i = 0; i < arrayNumSplit.length; i++){
  const NumSplit = parseInt(arrayNumSplit[i]);
  somma += NumSplit;
}

console.log(somma);
output.innerHTML =`
  la somma delle cifre inserite è ${somma}
`;
