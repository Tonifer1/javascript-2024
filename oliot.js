var autot = [
    { id: 1, merkki: "Toyota", vuosimalli: "2006", hinta: "3000" },
    { id: 2, merkki: "Saab", vuosimalli: "1986", hinta: "9000" },
    { id: 3, merkki: "Lada", vuosimalli: "1991", hinta: "4000" },
  ];
  
  var standard_input = process.stdin;
  standard_input.setEncoding("utf-8");
  console.log("Javascript autohaku");
  console.log("Sovellus suljetaan kirjoittamalla 'exit'");
  process.stdout.write("Hae autoja merkin, hinnan tai vm. mukaan: ");
  
  standard_input.on("data", function (data) {
    var syöte = data.trim().toLowerCase();
    if (data === "exit\r\n") {
      console.log("Kiitos ja näkemiin.");
      process.exit();
    } 
    else {
      var vastaavuus = false;

         
      autot.forEach((a) => {
        if (
        (typeof a.vuosimalli === 'string' && a.vuosimalli.toLowerCase().includes(syöte)) ||          
        (typeof a.merkki === 'string' && a.merkki.toLowerCase().includes(syöte))||          
        (typeof a.hinta ==='string' && a.hinta.toLowerCase().includes(syöte))
        ) 
        {
          console.log("Merkki: " + a.merkki + " vm: " + a.vuosimalli + " Hinta: " + a.hinta);
          vastaavuus = true;
        }
      });
        if (!vastaavuus){
          console.log("Mallia ei löydy")
        }
      
    }  //node .\muuttujat.js
  } )


