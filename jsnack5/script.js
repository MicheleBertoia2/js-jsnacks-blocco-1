// JSnack 5
//  Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero,
//  se è dispari inseriscilo nell’array
const numDispari = [];

const limiteNumeri = 6;
let counter = 0;

while(counter < limiteNumeri){
  const numChiesto = prompt('inserisci un numero');
  counter++;
  if(parseInt(numChiesto) % 2){
    numDispari.push(parseInt(numChiesto))
  }
  console.log(numDispari);
};