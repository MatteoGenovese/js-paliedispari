// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function getEvenOrOdds(){
    let userEvenOrOdds=prompt("scegli pari [p] o dispari [d]");
    while((userEvenOrOdds!=="p" ) && (userEvenOrOdds!=="d"))
        userEvenOrOdds=prompt("scegli [p] o [d]");
    return userEvenOrOdds;
}

function getAUserNumber(){
    let userNumber= parseInt(prompt("inserisci un numero da 1 a 5"));
    while(userNumber<1 && userNumber>5)
        userNumber=parseInt(prompt("ho detto da 1 a 5"));
    return userNumber;
}
function getAPcNumber(){
    return Math.floor(Math.random() * (5 - 1)) + 1;
}
function getResult(userNumber,pcNumber, userEvenOrOdds){
    if (((userNumber+pcNumber)%2==0 && userEvenOrOdds=="p") || ((userNumber+pcNumber)%2!=0 && userEvenOrOdds=="d"))
        return `l'utente ha vinto 
        scelta pari o dispari utente: ${userEvenOrOdds}
        numero utente: ${userNumber}
        numero pc: ${pcNumber}
        `;
    else
        return `il pc ha vinto        
        scelta pari o dispari utente: ${userEvenOrOdds}
        numero utente: ${userNumber}
        numero pc: ${pcNumber}
        `;
}


const userEvenOrOdds=getEvenOrOdds();
const userNumber=getAUserNumber();
const pcNumber=getAPcNumber();
console.log(getResult(userNumber,pcNumber, userEvenOrOdds));

