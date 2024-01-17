var puhelimet = ["oneplus","Sony","Nokia","Iphone",]

for (let i =0; i < puhelimet.length; i++)
if (puhelimet[i]=="Sony"){
console.log(puhelimet[i] + "<-----Minulla on tämä malli");
}
else
    console.log("Puhelin" + " " +(i+1) +". on " + puhelimet[i])


//  puhelimet.forEach(puhelin =>
//      console.log("Puhelin on " +puhelin)
//  )



// puhelimet.map(p =>
// console.log("Puhelin on "+ p)
// node .\silmukat.js
//)