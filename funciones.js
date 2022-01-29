function RNG(maximo){
    //* CUALQUIER TIPO DE RNG
   let aleatoriedad = Math.round(Math.random()*maximo);
   return aleatoriedad;
}
function dado(){
   // TIRAR EL DADO (INICIAL)
   skillVida = RNG(10);
   skillMana = RNG (10);
   skillDañoFisico = RNG(10);
   skillDañoMagico = RNG(10);
   skillEvasion = RNG(10);
   skillEquitacion = RNG(10);
   skillNavegacion = RNG(10);
   $(".dado").remove()
   actualizarSkills();
}
function actualizarSkills(){
    //*ACTUALIZAR LOS SKILLS (EN PANTALLA)
    $(".texto").append("<div class = 'dado' ID = 'skillsDado'>Te quedan " + skillsRestantes + " skills por asignar</div>")
    $(".texto").append("<div class = 'dado' ID = 'vidaDado'>Tus skills de constitución son de " + skillVida + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'manaDado'>Tus skills de inteligencia son de " + skillMana + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'dañoFisicoDado'>Tus skills de daño físico son de " + skillDañoFisico + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'dañoMagicoDado'>Tus skills de daño mágico son de " + skillDañoMagico + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'evasionDado'>Tus skills de evasión son de " + skillEvasion + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'equitacionDado'>Tus skills de equitación son de " + skillEquitacion + "</div>")
    $(".texto").append("<div class = 'dado' ID = 'navegacionDado'>Tus skills de navegación son de " + skillNavegacion + "</div>")
}
function evadir(){
    if (RNG(9) == 0){
        return true;
    }
    else{
        return false;
    }
}
function detectarSkillsRestantes(){ 
   //*DETECTAR SI QUEDAN O NO SKILLS PARA ASIGNAR
   if (skillsRestantes == 0){
       return true;
   }
   else{
    actualizarSkills()
    skillsAsignar()
   }
}
function pushBotones(){ 
     //*HACER APARECER LOS BOTONES PARA SUBIR SKILLS
     $("#vidaDado").append("<button class = 'skill' id = 'vidaButtonSkill'>Añadir un punto de constitución</button>")
     $("#manaDado").append("<button class = 'skill' id = 'manaButtonSkill'>Añadir un punto de inteligencia</button>")
     $("#dañoFisicoDado").append("<button class = 'skill' id = 'dañoFisicoButtonSkill'>Añadir un punto de Daño Fisico</button>")
     $("#dañoMagicoDado").append("<button class = 'skill' id = 'dañoMagicoButtonSkill'>Añadir un punto de Daño Magico</button>")
     $("#evasionDado").append("<button class = 'skill' id = 'evasionButtonSkill'>Añadir un punto de Evasión</button>")
     $("#equitacionDado").append("<button class = 'skill' id = 'equitacionButtonSkill'>Añadir un punto de equitación</button>")
     $("#navegacionDado").append("<button class = 'skill' id = 'navegacionButtonSkill'>Añadir un punto de navegación</button>")
}
function mensajePantallaNuevosSkills(){
    //*MOSTRAR UN MENSAJE CON LOS NUEVOS VALORES TOTALES ACTUALIZANDO LOS MISMOS (Se termina al clickear)
    vida = 100 + (skillVida * 2);
    mana = (skillMana * 5);
    evasion = skillEvasion;
    dañoFisico = 10 + (skillDañoFisico);
    dañoMagico = 10 + (skillDañoMagico);
    equitacion = skillEquitacion;
    navegacion = skillNavegacion;
    $(".texto").text("Posees " + vida + " de constitucion, " + mana + " de inteligencia, " + dañoFisico + " de daño físico, " + dañoMagico + " de daño mágico, " + skillEvasion + " de evasion " + skillEquitacion + " de equitacion " + skillNavegacion + " de navegacion")
    $(".texto").append("<div><button id = 'botonSkillFinal'>Presione aquí para continuar</button></div>")
    $("#botonSkillFinal").on("click", function(){
        $("#botonSkillFinal").fadeOut("fast",function(){
            $("#botonSkillFinal").remove()
        })
        $(".texto").fadeOut("fast",function(){
            console.log ("texto eliminado")
            $(".texto").text("");
            pantallaBatalla();
        })
    })
}
function borrarSkillsPantalla(){
    //*ELIMINAR TODO EL MENU PARA SUBIR SKILLS
    $(".dado").remove()
    mensajePantallaNuevosSkills();
}
function skillsAsignar(){ 
    //!HACER APARECER EL MENU DE SKILLS
    pushBotones();
    $("#vidaButtonSkill").on("click",function(){
        skillVida ++;
        skillsRestantes --;
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        pushBotones()
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#manaButtonSkill").on("click",function(){
        skillMana ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#dañoFisicoButtonSkill").on("click",function(){
        skillDañoFisico ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#dañoMagicoButtonSkill").on("click",function(){
        skillDañoMagico ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#evasionButtonSkill").on("click",function(){
        skillEvasion ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#equitacionButtonSkill").on("click",function(){
        skillEquitacion ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
    $("#navegacionButtonSkill").on("click",function(){
        skillNavegacion ++;
        skillsRestantes --;
        actualizarSkills();
        pushBotones();
        $(".dado").remove()
        console.log("removidas stats de dado")
        $(".skill").remove()
        console.log("removidos botones")
        if (detectarSkillsRestantes()){
            borrarSkillsPantalla();
        }
    })
}
function pantallaBatalla(){
    setDificultad()
}
function habilitarBotones(){
    $("#botonAtacar").on("click",function(){
        $(".texto").fadeOut("fast",function(){
            deshabilitarBotones()
            ataqueFisico()
        })
    })
    $("#botonHechizo").on("click",function(){
        $(".texto").fadeOut("fast",function(){
            deshabilitarBotones()
            ataqueMagico()
        })
    })
    $("#botonInspeccionar").on("click",function(){
        $(".texto").fadeOut("fast",function(){
            deshabilitarBotones()
            inspeccionar()
        })
    })
}
function deshabilitarBotones(){
    $("#botonAtacar").unbind("click")
    $("#botonHechizo").unbind("click")
    $("#botonInspeccionar").unbind("click")
}
function setDificultad(){
    //Setear dificultad y proceder a generar el enemigo
    dificultad = dificultad + 5;
    generarEnemigo(dificultad)
}
//FUNCIONES CONSTRUCTORAS DE ENEMIGOS
class tiposDeEnemigo{
    constructor (nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
class tiposDeMontura{
    constructor (nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
const enemigos = []
const enemigosExtras = []
//FUNCIONES CONSTRUCTORAS DE ENEMIGOS
function generarEnemigo(){
    //CREAR AL ENEMIGO EN CUESTION
    constEnemigo = RNG(dificultad);
    intEnemigo = RNG(dificultad);
    evasionEnemigo = RNG (dificultad);
    dañoFisicoEnemigo = RNG (dificultad);
    dañoMagicoEnemigo = RNG (dificultad);
    if (dificultad >= 15){
        equitacionEnemigo = RNG(dificultad);
        navegacionEnemigo = RNG(dificultad);
    }
    else{
        equitacionEnemigo = 0;
        navegacionEnemigo = 0;
    }
    if (dificultad >= 20){
        if (dificultadResistencias < 9){
            dificultadResistencias ++;
        }
        armaduraEnemigo = RNG(dificultadResistencias);
        resistenciaMagicaEnemigo = RNG(dificultadResistencias);
    }
    else{
        armaduraEnemigo = 0;
        resistenciaMagicaEnemigo = 0;
    }
    if (dañoMagicoEnemigo > dañoFisicoEnemigo){
        enemigoActual = magoInfo;
    }
    else{
        enemigoActual = espadachinInfo;
    }
    if (equitacionEnemigo > 10){
        extraEnemigo = codigoCaballo;
    }
    else{
        if (navegacionEnemigo > 10){
            extraEnemigo = codigoBarco;
        }
        else{
            extraEnemigo = codigoNormal;
        }
    }
    vidaTotalEnemigo = 100 + (constEnemigo * 2)
    manaTotalEnemigo = intEnemigo * 5
    evasionTotalEnemigo = evasionEnemigo
    dañoFisicoTotalEnemigo = 10 + (dañoFisicoEnemigo)
    dañoMagicoTotalEnemigo = 10 + (dañoMagicoEnemigo)
    armaduraTotalEnemigo = armaduraEnemigo * 10;
    resistenciaMagicaTotalEnemigo = resistenciaMagicaEnemigo * 10;
    setStatsCombate(extraEnemigo.nombre);
    turnoJugador();
}
function turnoJugador(){
    actualizarHud()
    //!TURNO
    $(".texto").fadeIn("fast",function(){})
    $(".texto").unbind("click")
    $(".texto").text("Un " + enemigoActual.nombre + extraEnemigo.nombre + " ataca! Escoge una de las tres acciones.");
    habilitarBotones();
}
function turnoEnemigo(){
    actualizarHud()
    $(".texto").fadeIn("fast",function(){})
    if (enemigoActual.nombre == "Espadachin comun "){
        if (evasion >= 10){
            if (evadir()){
                $(".texto").text("¡Evadiste rápidamente el ataque! Presiona para continuar.")
                $(".texto").on("click",function(){
                    turnoJugador();
                })
            }
            else{
                jugadorNoEvade()
            }
        }
        else{
            jugadorNoEvade()
        }
        function jugadorNoEvade(){
            let accionEspadachin = RNG(2)
            if (accionEspadachin == 0){
                vidaJugadorCombate = vidaJugadorCombate - dañoFisicoTotalEnemigo;
                console.log (vidaJugadorCombate + "de " + vida)
                $(".texto").text("Tu enemigo te ha golpeado por " + dañoFisicoTotalEnemigo + ". Posees " + vidaJugadorCombate + " puntos de vida. Presiona para continuar")    
            }
            else if (accionEspadachin == 1){
                if ((manaTotalEnemigo > 0) || (dañoMagicoTotalEnemigo > 0)){
                    vidaTotalEnemigo = vidaTotalEnemigo + manaTotalEnemigo + dañoMagicoTotalEnemigo;
                    manaTotalEnemigo = 0;
                    dañoMagicoTotalEnemigo = 0;
                    console.log ("Piel de hierro")
                    $(".texto").text("Tu enemigo convirtió sus stats inútiles en aún más vida por el resto del combate! Tu oponente posee " + vidaTotalEnemigo + " puntos de vida. Presiona para continuar")
                }
                else{
                    let vidaExtra = RNG(10)
                    vidaTotalEnemigo = vidaTotalEnemigo + vidaExtra
                    $(".texto").text("Tu enemigo obtuvo " + vidaExtra + " puntos de vida por medio de conjuros antiguos! Presiona para continuar")
                }
            }
            else if (accionEspadachin == 2){
                if ((dañoFisico > 20) || (dañoMagico > 50)){
                    console.log ("Temor")
                    dañoFisico = Math.round(dañoFisico / 2)
                    dañoMagico = Math.round(dañoMagico / 2)
                    $(".texto").text("Tu enemigo alza su espada y te atemoriza, reduciendo tu daño a la mitad por este combate. Tu daño físico es de " + dañoFisico + " y tu daño magico es de " + dañoMagico + ". Presiona para continuar")
                }
                else{
                    console.log("Rabia")
                    let vidaPerdidaEnemigo = Math.round(vidaTotalEnemigo / 2)
                    dañoFisicoTotalEnemigo = dañoFisicoTotalEnemigo + vidaPerdidaEnemigo
                    vidaTotalEnemigo = vidaPerdidaEnemigo
                    $(".texto").text("Tu enemigo reduce su vida a la mitad para conseguir esos puntos como daño! Presiona para continuar")
                }
            }
             $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaJugador();
                })
            })
        }
    }
    else{
        console.log(manaTotalEnemigo)
        if (manaTotalEnemigo < 10){
            manaRecargado = (RNG(9)+1) * 10
            $(".texto").text("¡Tu enemigo se concentra y recarga " + manaRecargado + " puntos de maná! Presiona para continuar")
            manaTotalEnemigo = manaTotalEnemigo + manaRecargado
            $(".texto").on("click", function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaJugador();
                })
            })
        }
        else{
            let accionMago = RNG(2)
            if (accionMago == 0){
                vidaJugadorCombate = vidaJugadorCombate - dañoMagicoTotalEnemigo
                $(".texto").text("Tu enemigo lanza un poderoso conjuro contra ti, lo que te golpea por " + dañoMagicoTotalEnemigo + ". Posees " + vidaJugadorCombate + " puntos de vida. Presiona para continuar")
            }
            else if (accionMago == 1){
                if (manaJugadorCombate != 0){
                    $(".texto").text("¡Tu enemigo lanza un conjuro que reduce tu maná a 0. Presiona para continuar")
                    manaJugadorCombate = 0
                }
                else if ((manaJugadorCombate == 0) && (skillMana > 0)){
                    $(".texto").text("¡Tu enemigo lanza una maldicion devastadora que reduce toda tu inteligencia en 5 de forma permanente! Presiona para continuar")
                    skillMana = skillMana - 5
                    if (skillMana < 0){
                        skillMana = 0;
                    }
                }
                else if (skillMana <= 0){
                    vidaJugadorCombate = vidaJugadorCombate - (dañoMagicoTotalEnemigo * 3)
                    $(".texto").text("Tu enemigo lanza un conjuro crítico que castiga tu torpeza, lo que te realiza un devastador daño de " + (dañoMagicoTotalEnemigo * 3) + ". Presiona para continuar")
                }
            }
            else if (accionMago == 2){
                $(".texto").text("El mago se concentra. ¡Su daño aumenta en 25 por el resto del combate! Presiona para continuar")
                dañoMagicoTotalEnemigo = dañoMagicoTotalEnemigo + 25
            }
            $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaJugador();
                })
            })
            manaTotalEnemigo = manaTotalEnemigo - 10
        }
    }
}
function setStatsCombate(montura) {
    vidaJugadorCombate = vida;
    manaJugadorCombate = mana;
    if (montura == "a caballo"){
        if (equitacionEnemigo > equitacion){
            dañoFisicoTotalEnemigo = dañoFisicoTotalEnemigo * 2;
            dañoMagicoTotalEnemigo = dañoMagicoTotalEnemigo * 2;
        }
    }
    else if (montura == "en barco"){
        if (navegacionEnemigo > navegacion){
            dañoFisicoTotalEnemigo = dañoFisicoTotalEnemigo * 2;
            dañoMagicoTotalEnemigo = dañoMagicoTotalEnemigo * 2;
        }
    }
}
function ataqueFisico(){
    console.log("Ataque fisico")
    $(".texto").fadeIn("fast",function(){})
    if (evasionTotalEnemigo >= 10){
        if (evadir()){
           $(".texto").text("¡Tu oponente evadió tu ataque! Presiona para continuar.")
            $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaEnemigo()
                })
            })
        }
        else{
            ataqueFisicoSinEvasion()
        }
    }
    else{
        ataqueFisicoSinEvasion()
    }
    function ataqueFisicoSinEvasion (){
        if (armaduraTotalEnemigo == 0){
            console.log("Sin armadura detectada")
            vidaTotalEnemigo = vidaTotalEnemigo - dañoFisico;
            $(".texto").text("¡Golpeaste a tu oponente por " + dañoFisico + " puntos de daño fisico! Presiona para continuar")
            $(".texto").on("click",function(){
                $(".texto").unbind("click")
                $(".texto").fadeOut("fast",function(){
                    chequearVidaEnemigo();
                })
            })
        }
        else{
            console.log("Armadura detectada")
            let dañoEsteTurno = Math.round(dañoFisico * (armaduraTotalEnemigo / 100))
            dañoEsteTurno = dañoFisico - dañoEsteTurno;
            vidaTotalEnemigo = vidaTotalEnemigo - dañoEsteTurno
            $(".texto").text("A pesar de la armadura de tu rival, lo golpeaste por " + dañoEsteTurno + " puntos de daño físico! Presiona para continuar")
            $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaEnemigo();
                })
            })
        }
    }
}
function ataqueMagico(){
    console.log("Ataque Magico")
    $(".texto").fadeIn("fast",function(){})
    if (manaJugadorCombate < 10){
        manaRecargarJugador = (RNG(9)+1)*10;
        manaJugadorCombate = manaJugadorCombate + manaRecargarJugador
        if (manaJugadorCombate > mana){
            manaJugadorCombate = mana;
        }
        $(".texto").text("Al tener carencia de maná para lanzar ese hechizo, comienzas a meditar y recuperas " + manaRecargarJugador + " puntos de maná. Presiona para continuar")
        $(".texto").on("click",function(){
            $(".texto").unbind("click");
            $(".texto").fadeOut("fast",function(){
                chequearVidaEnemigo()
            })
        })
    }
    else{
        if (resistenciaMagicaTotalEnemigo == 0){
            console.log("Sin resistencia magica detectada")
            vidaTotalEnemigo = vidaTotalEnemigo - dañoMagico
            $(".texto").text("Lanzas un poderoso conjuro a tu adversario, lo que lo golpea por " + dañoMagico + " puntos de daño mágico! Presiona para continuar")
            $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaEnemigo()
                })
            })
        }
        else{
            console.log("Resistencia magica detectada")
            let dañoEsteTurno = Math.round(dañoMagico * (resistenciaMagicaTotalEnemigo / 100))
            dañoEsteTurno = dañoMagico - dañoEsteTurno;
            vidaTotalEnemigo = vidaTotalEnemigo - dañoEsteTurno
            $(".texto").text("Lanzas un poderoso conjuro a pesar de las resistencias de tu oponente, lo que lo golpea por " + dañoEsteTurno + " puntos de daño mágico. Presiona para continuar")
            $(".texto").on("click",function(){
                $(".texto").fadeOut("fast",function(){
                    chequearVidaEnemigo()
                })
            })
        }
        manaJugadorCombate = manaJugadorCombate - 10;
    }
}
function inspeccionar(){
    $(".texto").fadeOut("fast",function(){
        $(".texto").fadeIn("fast",function(){})
        $(".texto").text(enemigoActual.nombre + "." + enemigoActual.descripcion + extraEnemigo.descripcion + " Los stats de tu oponente son " + vidaTotalEnemigo + " de vida, " + manaTotalEnemigo + " de mana," + evasionTotalEnemigo + " de evasion, " + navegacionEnemigo + " de navegacion, " + equitacionEnemigo + " de equitacion, " + dañoFisicoTotalEnemigo + " de daño fisico, " + dañoMagicoTotalEnemigo + " de daño magico, " + armaduraTotalEnemigo + " de armadura y " + resistenciaMagicaTotalEnemigo + " de resistencia mágica. Presiona para continuar")
        $(".texto").on("click", function(){
            $(".texto").fadeOut("fast",function(){
                turnoJugador()
            })
        })
    })
}
function actualizarHud(){
    $(".vidaDisplay").text(vidaJugadorCombate + "/" + vida + "HP")
    $(".vidaDisplay").append("<img src='corazon.png' alt=''></img>")
    $(".manaDisplay").text(manaJugadorCombate + "/" + mana + "MP")
    $(".manaDisplay").append("<img src='bolt.png' alt=''></img>")
}
function chequearVidaEnemigo (){
    if (vidaTotalEnemigo <= 0){
        ganarCombate()
    }
    else{
        $(".texto").fadeOut("fast",function(){})
        actualizarHud()
        turnoEnemigo()
    }
}
function chequearVidaJugador (){
    if (vidaJugadorCombate <= 0){
        perderCombate()
    }
    else{
        actualizarHud()
        turnoJugador()
    }
}
function ganarCombate(){
    permaChange ++;
    skillsRestantes = RNG(9)+1;
    $(".texto").fadeIn("fast",function(){})
    $(".texto").text("Ganaste el combate! Posees " + skillsRestantes + " skills para asignar.")
    $(".texto").unbind("click")
    $(".texto").append("<button id = 'buttonSkip'>Continuar a estadísticas</button>")
    $("#buttonSkip").on("click",function(){
        $(".texto").text("")
        actualizarSkills()
        skillsAsignar()
        enemigosPeleados ++;
    })
}
function perderCombate(){
    $(".texto").fadeIn("fast",function(){})
    $(".texto").unbind("click")
    const URLJSON = "muertes.json";
    $.getJSON(URLJSON, function (respuesta, estado){
        if (estado === "success"){
            let dato = RNG(4)
            $(".texto").text(respuesta[dato].Texto)
            $(".texto").append("<div>Derrotaste a " + enemigosPeleados + " oponentes.</div>")
        }
    })
}