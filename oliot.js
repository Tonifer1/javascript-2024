var  autot =[{id:1,merkki:"Toyota",vuosimalli:2006,hinta: 3000},
{id:2,merkki:"Bmw",vuosimalli:1986,hinta: 9000,},
{id:3,merkki:"Lada",vuosimalli:1991,hinta: 4000}
]

var hakusana =""
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
   
}


    
// autot.forEach(a=>{
//     console.log(a.merkki + " " + "vuodelta " + a.vuosimalli)
//     console.log("hinta" + " " + a.hinta)
//     console.log("_________________________")
     
// }

// autot.forEach(a =>{
//     if (a.id === 3){
//         console.log("Auto id:llä " +a.id + " on LUJAA LAATUA" + " " + a.merkki )
//     }
// }
)
    
// node ./oliot.js
    