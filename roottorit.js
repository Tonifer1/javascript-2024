var  roottorit =[
    {id:6, malli:"E6", koko:"Min"},
    {id:12, malli:"E12", koko:"Med"},
    {id:25, malli:"E25",koko:"Large"}
];
var standard_input = process.stdin;
standard_input.setEncoding("utf-8");

console.log("Roottori haku");
console.log("Sovellus suljetaan kirjoittamalla 'exit'");
process.stdout.write("Hae roottoria mallin tai koon mukaan: ");

standard_input.on("data",function(data){
    var syöte = data.trim().toLowerCase()
    if (data ==="exit\r\n"){
        console.log("Kiitos ja näkemiin");
        process.exit();
    }
    else {
        var vastaavuus = false;


        roottorit.forEach ((r)=> {
            if(
                (typeof r.malli === 'string' && r.malli.toLowerCase().includes(syöte)) ||
                (typeof r.koko === 'string' && r.koko.toLowerCase().includes(syöte))
            )
            {
                console.log("Malli: " + r.malli + " Koko: " + r.koko );
                vastaavuus = true;
            }

            });
        if (!vastaavuus){
            console.log("Mallia ei löytynyt");
        }
        
                    
    }
});

// var roottorit = [
//     { id: 6, malli: "E6", koko: "Min" },
//     { id: 12, malli: "E12", koko: "Med" },
//     { id: 25, malli: "E25", koko: "Large" }
// ];

// var standard_input = process.stdin;
// standard_input.setEncoding("utf-8");

// console.log("Roottori haku");
// console.log("Sovellus suljetaan kirjoittamalla 'exit'");
// process.stdout.write("Hae roottoria mallin tai koon mukaan: ");

// standard_input.on("data", function (data) {
//     var syöte = data.trim().toLowerCase();
//     if (data === "exit\r\n") {
//         console.log("Kiitos ja näkemiin");
//         process.exit();
//     } else {
//         var vastaavuus = false;

//         roottorit.forEach((r) => {
//             if (
//                 (typeof r.malli === 'string' && r.malli.toLowerCase().includes(syöte)) ||
//                 (typeof r.koko === 'string' && r.koko.toLowerCase().includes(syöte))
//             ) {
//                 console.log("Malli: " + r.malli + " Koko: " + r.koko);
//                 vastaavuus = true;
//             }
//         });

//         if (!vastaavuus) {
//             console.log("Mallia ei löytynyt");
//         }
//     }
// });

