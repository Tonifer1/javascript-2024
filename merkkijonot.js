// const email = "toni.pekkola@yrtitys.fi";
// var nimiOsat = email.split('@')[0].split('.');
// var etunimi = nimiOsat[0];
// var sukunimi = nimiOsat[1];

// console.log("Etunimi: " + etunimi);
// console.log("Sukunimi: " + sukunimi);



const email = "akseli.vonkumula@yritysoy.fi"
 
var nimiOsat = email.split('@')[0].split('.');
var etunimi = nimiOsat[0];
var sukunimi = nimiOsat[1]
 
console.log("Etunimi: " + etunimi)
console.log("Sukunimi: " + sukunimi)
 
if (sukunimi.indexOf("v") === 0) {
    console.log("Sukunimi alkaa v:llä.")
}

// if (sukunimi.indexOf("p") === 0) {
//     console.log("Sukunimi alkaa p:llä");




// }
//node .\merkkijonot.js
  
