var nombre = "";
var usuario = "";
var machine = "";
var historial = [];

nombre = ("Digite su usuario: ", "")


if(nombre == ""){
    document.getElementById("player").innerHTML= "Anónimo";
}
else{
    document.getElementById("player").innerHTML = nombre;
}

function opciones(caracter){
    let victories = 0;
    let defeats = 0;

    function maquina(){
        machine = Math.floor(Math.random()*3);
    }
    maquina()

    if (caracter === "piedra"){
        usuario = 0;
        juego(usuario);
    }
    else if(caracter === "papel"){
        usuario = 1;
        juego(usuario);
    }
    else{ // tijera
        usuario = 2;
        juego(usuario);
    }

    

    
    
}
function logica(caracter) {
        
}
