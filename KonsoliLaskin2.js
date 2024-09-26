//Ohjelmasta puuttuu kaikki required moduulit

let kaava = '';//luodaan kaava muuttuja
let tulos = 0; //luodaan tulos muuttuja

//Määritellään process.stdin standardiksi input-objektiksi.
var standard_input = process.stdin;

//Asetetaan input-merkistö
standard_input.setEncoding('utf-8');

//Aloitetaan sovellus ja kirjoitetaan käyttäjälle ohjeita
console.log("Sovellus suljetaan kirjoittamalla 'exit'");

process.stdout.write("Anna laskukaava: ");

//Seuraavaa rutiinia kutsutaan aina, kun käyttäjä kirjoittaa jotain ja/tai painaa enteriä .Tallentuu (data) olioon syöte.
standard_input.on('data', function (data) {

    
    if (data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen");
        process.exit();
    } 
    else //Muussa tapauksessa lasketaan yhteen lukujen summia annetun laskukaavan perusteella
    {
        kaava = data.trim();// data siirtyy kaavaan tässä ja trim poistaa tyhjät välilyönnit
        tulos = eval(kaava);  //eval-funktio laskee annetun laskukaavan. Sisäänrakennettu funktio, joka arvioi merkkijonon ja palauttaa tuloksen.
        console.log(kaava + '=' + tulos);
        process.stdout.write("Anna uusi laskukaava: ");
    }
     //node .\KonsoliLaskin2.js

});

