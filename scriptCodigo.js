dado();
//!DEFINIR ENEMIGOS****************************************************************************************
let espadachin = new tiposDeEnemigo("Espadachin comun "," No tiene nada de especial.");
enemigos.push(espadachin);
let espadachinInfo = enemigos.find(elemento => elemento === espadachin);
let mago = new tiposDeEnemigo("Mago malvado "," Poderoso hechicero que posee conocimientos en la magia arcana. No le preguntamos si era malvado.");
enemigos.push(mago);
let magoInfo = enemigos.find(elemento => elemento === mago);
let aCaballo = new tiposDeMontura("a caballo"," Parece ser un experto combatiendo en caballos, ten cuidado.")
enemigosExtras.push(aCaballo);
let codigoCaballo = enemigosExtras.find(elemento => elemento === aCaballo);
let aBarco = new tiposDeMontura("en barco"," Al juzgar por su vela, posee un gran conocimiento de los oceanos. No estamos seguros de si estamos en un oceano, usemos la imaginación.")
enemigosExtras.push(aBarco);
let codigoBarco = enemigosExtras.find(elemento => elemento === aBarco);
let normal = new tiposDeMontura("a pie","");
enemigosExtras.push(normal);
let codigoNormal = enemigosExtras.find(elemento => elemento === normal);
//!DEFINIR ENEMIGOS***************************************************************************************
let modoOscuro = document.getElementById("modo");
chequearModoOscuro(localStorage.getItem("oscuro"))
console.log(localStorage.getItem("oscuro"))
function chequearModoOscuro(modo){
    if (modo == "true"){
        console.log("true")
        document.body.id = ""
    }
    else{
        console.log("false")
        document.body.id = "oscuro"
    }
}

modoOscuro.onclick = () =>{
    if (localStorage.getItem("oscuro") == "true"){
        localStorage.setItem("oscuro", "false")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
    else{
        localStorage.setItem("oscuro", "true")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
}