// JSnack 6
//  Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const numChiesto = parseInt(prompt('inserisci un numero e ti dico il cubo di tutti i numeri fino al tuo numero inserito'));

let message = '';
const output = document.getElementById('output');

for(let i = 1; i <= numChiesto; i++){
  const numCubo = i * i * i;
  message += numCubo + ' ';
  console.log(message);
}

output.innerHTML = message