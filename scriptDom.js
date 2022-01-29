$(".texto").append("<button id = 'button'>Tirar de nuevo</button>")
$(".texto").append("<button id = 'buttonSkip'>¡Me gustan estas estadisticas!</button>")
$("#button").on("click",function(){dado()})
$("#buttonSkip").on("click",function(){
    if (permaChange != 0){
        pushBotonesSkills ();
        $(".text").text()
    }
    else{
        $("#button").remove();
    }
    $("#buttonSkip").remove()
    skillsAsignar()
})