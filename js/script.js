//functions
function isBetweenMinMax(min, max, num) {
    return  min <= num && num <= max; 
}

/*
//da considerare al posto di inludes
function isInArr(num, arr) { 
    return arr.includes(num);
}
*/

//lunghezza campo minato
var minedFieldLength = 5;
// numero scelto da utente
var userNumber = 0;
// array in cui vengono registrati i numeri già inseriti dall'utente;
var prevUserNumbers = [];
// punteggio utente: quanti numeri consentiti ha indovinato
var score = 0;

//creare campo minato: n numeri non uguali tra loro tra 1 e 100
var minedField = [1, 2, 3, 4, 5];
var minePositions = [1, 5];

//tentativi fatti dall'utente (counter)
var possibleAttempts = minedFieldLength - minePositions.length;

while(possibleAttempts > 0) {
    //chiedere numero all'utente tra 1 e 100 e inserirlo in un arr 
    userNumber = parseInt(prompt("Inserisci numero."));

    //verifica se numero utente è compreso tra 1 e 100,
    if(isBetweenMinMax(1, 5, userNumber)) {
        console.log("ok");
        console.log(minePositions.includes(userNumber));

        //Verifica se numero utente === numero vietato -> perso
        if(minePositions.includes(userNumber)) {
            alert("Hai perso: hai fatto saltare la mina n." + userNumber + ". Il tuo puteggio: " + score + ".")
            break;

        } else { 
            //verifica se è già presente nell'arr utente,
            if(prevUserNumbers.includes(userNumber)) {
                alert("Numero già inserito. Riprova");

            } else {
                //segna un punto e aggiungi a prevuserNumbers
                score++;
                possibleAttempts--;

                //verifica se length arr utente è all'interno del numero consentito -> continua / vittoria
                if(possibleAttempts === 0) {
                    alert("Hai vinto! Punteggio: " + score + ".");
                } else {
                    prevUserNumbers.push(userNumber);
                    alert("Bravo, continua! Il tuo punteggio attuale: " + score + ".")
                }

            }

        }
    } else {
        alert("Il numero inserito non è compreso fra 1 e 100");
    }
}



