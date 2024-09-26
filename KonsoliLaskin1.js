let summa = 0;

//Määritellään process.stdin standardiksi input-objektiksi. Löytyy Javascriptistä
var standard_input = process.stdin;

//Asetetaan input-merkistö
standard_input.setEncoding('utf-8');

//Aloitetaan sovellus ja kirjoitetaan käyttäjälle ohjeita
console.log("JavaScript-laskin, konsolisovellus (V0.1)");
console.log('Sovellus suljetaan kirjoittamalla "exit"');

//Perustetaan prosessi
process.stdout.write("Anna ensimmäinen luku: ");

//Seuraavaa rutiinia kutsutaan aina, kun käyttäjä kirjoittaa jotain ja/tai painaa enteriä. 
//(data) muuttuja = tallentaa käyttäjän antaman syötteen
//Tapahtumakuuntelija (on-metodi): standard_input.on('data', function (data) { ... }) -rutiini määrittelee, 
//mitä tapahtuu, kun käyttäjä syöttää jotain ja painaa Enter. Kun syöte tapahtuu, määritelty funktio suoritetaan.
//Käytännössä tämä on tapahtumapohjainen lähestymistapa, joka toimii silmukan kaltaisesti. Node.js
//tapahtumapohjaiset ominaisuudet tekevät tästä mahdollisen ilman perinteisten silmukoiden käyttöä.

standard_input.on('data', function (data) {


    if (data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen");
        process.exit();
    } else //Muussa tapauksessa lasketaan yhteen lukujen summia
    {
        summa = summa + parseInt(data);//Muutetaan numeeriseksi
        //Annetun luvun tulostus konsolille.Trim poistaa rivinvaihdon
        console.log('Annoit luvun: ' + data.trim() + ' summa on ' + summa);
        process.stdout.write("Anna uusi luku: ");


    }
    //node .\KonsoliLaskin1.js

});



