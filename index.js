var usuario = "";
var machine = "";

//Variable del historial
var historial = document.getElementById('history').innerHTML = [];

// Variables del scoreboard 

var victories = document.getElementById('player-victories').innerHTML = 0;
var defeats = document.getElementById('machine-victories').innerHTML = 0;



function opciones(caracter){
    function maquina(){
        machine = Math.floor(Math.random()*3);
    }
    maquina()

    if (caracter === 'piedra'){
        usuario = 0;
        juego(usuario);
    }
    else if(caracter === 'papel'){
        usuario = 1;
        juego(usuario);
    }
    else{ // tijera
        usuario = 2;
        juego(usuario);
    }
}
    // La logica del scoreboard está mal, toca corregirla.
function juego(caracter){
    function resultado(valor,string){
        valor = document.getElementById(string).innerHTML = contador + 1;
    }
    if (usuario === 0 && machine === 2){ // Primer caso
        resultado(victories,'player-victories')
        almacenarEnHistorial('Ganaste');
    }
    else if (usuario === 1 && machine === 0){ // Segundo caso
        resultado(victories,'player-victories')
        almacenarEnHistorial('Ganaste');
    }
    else if (usuario === 2 && machine === 1){// Tercer caso
        resultado(victories,'player-victories')
        almacenarEnHistorial('Ganaste');
    }
    else if  (usuario === machine){// Cuarto caso
        almacenarEnHistorial('Empate');
    }
    else{ // Quinto caso
        resultado('machine-victories', defeats);
        almacenarEnHistorial('Perdiste');
    }

    console.log(victories)

    function almacenarEnHistorial(result){
        if (historial.length < 5){
            historial.push(result);
            let añadir = document.createElement('p');
            añadir.innerHTML = result;
            añadir.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
            document.getElementById('history').appendChild(añadir);
        }
        else{
            alert('El juego ha terminado');
        }
    }   
}


//historial.shift() 