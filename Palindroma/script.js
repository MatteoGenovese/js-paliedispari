// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

function getWord(){

    return prompt("inserisci una parola");
}

function getResult(userWord){
    let j=userWord.length-1;
    for(let i=0; i < j ; i++ )
    {
        console.log(`${userWord[i]} == ${userWord[j]}`)
        if(userWord[i]!==userWord[j])
        {
            return false;
        }
        j--;
    }
    return true;
}

let userWord = getWord();

if (getResult(userWord))
    document.write("La parola è palindroma")
else
    document.write("La parola non è palindroma")

