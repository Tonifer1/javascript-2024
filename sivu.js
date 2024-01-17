//palvelut sivun näyttäminen 
function palvelut(){
    let palvelut = `<h2>Palvelumme</h2>
    <ul>
        <p>Eläinlääkäri</p>
        <p>Päivähoito</p>
        <p>Yöhoito</p>
   </ul>
   `
   document.getElementById("sisältö").innerHTML = palvelut
}

function yhteystiedot(){
    document.getElementById("sisältö").innerHTML="";
    var otsikko = document.createElement("h2");
    var teksti = document.createTextNode("Yhteystiedot");
    otsikko.appendChild(teksti)    
    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(otsikko)

    var puhelin = document.createElement("h4");
    var puhTeksti = document.createTextNode("p.0900");
    puhelin.appendChild(puhTeksti)    
    
    sisältö.appendChild(puhelin)
}

    function tumma(){
        document.getElementById("sivu").style.backgroundColor = "black";
        document.getElementById("sivu").style.color = "white";
        localStorage.setItem("teema", "tumma")
    }
    function vaalea(){
        document.getElementById("sivu").style.backgroundColor = "white";
        document.getElementById("sivu").style.color = "black";
        localStorage.setItem("teema", "vaalea")
    }
    if (localStorage.getItem("teema") == "tumma"){
        tumma()
    }
    else {
        vaalea()
    }
    //localStorage.clear()
    
    
    
    
    
