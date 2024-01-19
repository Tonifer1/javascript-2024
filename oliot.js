var  autot =[{id:1,merkki:"Toyota",vuosimalli:2006,hinta: 3000},
{id:2,merkki:"Bmw",vuosimalli:1986,hinta: 9000,},
{id:3,merkki:"Lada",vuosimalli:1991,hinta: 4000}
]

var hakusana = ""
var standard_input = process.stdin
standard_input.setEncoding('utf-8');
console.log("Javascript autohaku")
console.log("Sovellus suljetaan kirjoittamalla 'exit'");
process.stdout.write("Hae autoja merkin mukaan: ");
standard_input.on('data', function (data){
    if (data ==='exit\r\n'){
        console.log ("Kiitos ja näkemiin.")
        process.exit()
    }

    // else {
    //     const hakusana = data.trim();
    //     autot.forEach(a => {
    //         if (a.merkki.toLowerCase().includes(hakusana.toLowerCase())) {
    //             console.log("Merkki: " + a.merkki + " vm: " + a.vuosimalli + " Hinta: " + a.hinta);
    //         }
    //     });
    // }

    else {
        hakusana = data.trim()
        autot.forEach (a =>{
            if (a.merkki.indexOf(hakusana) > -1) {
                console.log("Merkki:" + a.merkki +"vm" + a.vuosimalli + "Hinta: " + a.hinta)
            }
            
        });
    }
}
 
)
    
// node ./oliot.js
    