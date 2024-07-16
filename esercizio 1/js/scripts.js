// LISTA DELLA MAIL DENTRO UN ARRAY

const arrayMail = [
    'stefano@gmail.com',
    'michele@gmail.com',
    'luigi@gmail.com',
    'eduard@gmail.com',
    'giovanna@gmail.com'
];

// CHIEDE TRAMITE IL PROMT LA MAIL E LA INSERICE NELLA VARIABILE MAIL
const mail = prompt('Quale è la tua mail?');

// SE NEL PROMPT DELLA VARIABILE MAIL INSERISCI UN NUMERO, STAMPA IN CONSOLE MAIL NON VALIDA!
if (!isNaN(mail)) {
    console.log('ERRORE! Inserisci una mail valida')
}

else {
    let correctMail = false; // VARIABILE CHE DA UN VALORE BOOLEANO FALSO
/* 
    CICLO CHE CONTROLLA OGNI ELEMENTO AL INTERNO DELL'ARRAY
    PER VEDERE SE E' UGUALE ALLA VARIABILE MAIL
    SE TROVA UN VALORE CHE E' DENTRO L'ARRAY (arrayMail) ALLORA
    CAMBIA IL VALORE DELLA VARIABILE (correctMail) in true.
*/
    for (let i = 0; i < arrayMail.length; i++) {
        if (arrayMail[i] === mail ) {
            correctMail = true;
        }
    }

// SE CORRECTMAIL E' (TRUE) STAMPA IN CONSOLE LA MAIL E' CORRETTA.
    if (correctMail) {
        console.log ('La mail che hai inserito è corretta.');
    }
// ALTRIMENTI STAMPA IN CONSOLE LA MAIL CHE HAI INSERITO E' SBAGLIATA.
    else {
        console.log ('La mail che hai inserito è sbagliata riprova!');
    }  
}
