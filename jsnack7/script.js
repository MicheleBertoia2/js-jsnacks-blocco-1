// JSnack 7
//  Stampa le potenze di 2 fino a 1000.

const output = document.getElementById('output');

let numLimite = 1000;
let counter = 1;


let potenza = 2;
  
while (potenza < numLimite) {
  potenza = 2 * counter
  if(potenza < numLimite){
    counter++;
  }
  output.innerHTML += potenza + ' ';
console.log(potenza);
}

