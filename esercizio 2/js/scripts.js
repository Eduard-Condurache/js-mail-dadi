
// VARIABILE CHE CONTIENE UN NUMERO INTERO DA 1 A 6 PER L'UTENTE.
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);

// VARIABILE CHE CONTIENE UN NUMERO INTERO DA 1 A 6 PER IL COMPUTER.
const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);

// SE IL NUMERO DEL UTENTE E MAGGIORE DEL NUMERO DEL COMPUTER STAMPA IN CONSOLE HAI VINTO!
if (userNumber > computerNumber) {
    console.log('Hai vinto! Numero utente : '+ userNumber + ', Numero del computer: ' + computerNumber);
}

// ALTRIMENTI SE IL NUMERO DEL UTENTE E MAGGIORE DEL NUMERO DEL COMPUTER STAMPA IN CONSOLE HAI PERSO!
else if (userNumber < computerNumber) {
    console.log('Hai perso! Numero utente : '+ userNumber + ', Numero del computer: ' + computerNumber);
}

// ALTRIMENTI STAMPA IN CONSOLE HAI PAREGGIATO!
else {
    console.log('Hai pareggiato!');
}