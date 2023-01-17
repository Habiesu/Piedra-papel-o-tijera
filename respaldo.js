var operacion = "";

function botones(caracter){
    operacion += caracter;
    document.getElementById("resultado").innerHTML = caracter;
}

function resultados(){
    document.getElementById("resultado").innerHTML = eval(operacion);
    operacion = eval(operacion);
}

function borrar(){
    operacion = "";
    document.getElementById("resultado").innerHTML = "Resultado";
}




function juego(caracter){
    let won = document.createElement('p');
    let defeat = document.createElement('p');
    if (usuario === 0 && machine === 2){
        won.innerHTML = "Victoria";
        won.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
        document.getElementById('history').appendChild(won);
        victories = victories + 1;
        document.getElementById('player-victories').innerHTML = victories;
    }
    else if (usuario === 1 && machine === 0){
        won.innerHTML = "Victoria";
        won.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
        document.getElementById('history').appendChild(won);
        victories = victories + 1;
        document.getElementById('player-victories').innerHTML = victories;
    }
    else if (usuario === 2 && machine === 1){
        won.innerHTML = "Victoria";
        won.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
        document.getElementById('history').appendChild(won);
        victories = victories + 1;
        document.getElementById('player-victories').innerHTML = victories;
    }
    else if  (usuario === machine){
        let empate = 0;
        empate ++;
        document.getElementById("draw").innerHTML = empate;
    }
    else{
        defeat.innerHTML = "Derrota";
        defeat.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
        document.getElementById('history').appendChild(defeat);
        defeats = defeats + 1;
        document.getElementById('machine-victories').innerHTML = defeats;
    }
}

function resultado(resultado,string,contador,id1,id2){
    resultado.innerHTML = string;
    resultado.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
    document.getElementById(id1).appendChild(resultado);
    document.getElementById(id2).innerHTML = contador +=1;
}

let resultado = document.createElement('p');
resultado.innerHTML = string;
resultado.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
document.getElementById(id1).appendChild(resultado);
contador++;
document.getElementById(id2).innerHTML = contador;