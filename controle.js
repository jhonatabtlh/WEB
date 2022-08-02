const tabuleiro1 = document.querySelectorAll(".tabuleiro")
const jogador1 = "X";
const jogador2 = "O";
const reseta = null;
let turno = true;
var j1 = ['','','','',''];
var j2 = ['','','','',''];
var empate = true;
var numeroVitoriasJogador1 = 0;
var numeroVitoriasJogador2 = 0;
var contadorDeJogadasPorTurno = 0;
placar();
document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".tabuleiro")){
        jogar(event.target.id);
        
    }
    
})

document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".reseta")){
        resete();
        
    }
    
})



const possibilidades = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8]

]



function jogar(id){
    const area = document.getElementById(id);
    turnoDe = false;
    if(turno == true){
        turnoDe = jogador1;

        document.getElementById(id).disabled = true;
        contadorDeJogadasPorTurno++;
        
        for(let i = 0; i <j1.length; i++){
            if(j1[i] === ''){
                j1[i] = parseInt(id);
                break;
            }
        }
        venceu(turno);
        empatou(empate);
        turno = false;
    } else {
        turnoDe = jogador2;
        document.getElementById(id).disabled = true;
        contadorDeJogadasPorTurno++;
        
       for(let n = 0; n <j2.length; n++){
            if(j2[n] === ''){
                j2[n] = parseInt(id);
                break;
            }
        }
        venceu(turno);
        empatou();
        turno = true;
    }
    area.textContent = turnoDe;
    


    

}

function venceu(turno){
    var aux = 0;
    var acabou = false;
    if(turno == true){
    for(let i = 0; i < possibilidades.length; i++){
        aux = 0;
        for(let k = 0; k < 3; k++){
            for(let j = 0; j < j1.length; j++){
                if(possibilidades[i][k] === j1[j] ){
                    aux = aux+1;
                    if(aux == 3){
                        empate = false;
                        numeroVitoriasJogador1++;
                        placar();
                        alert("O Vencedor é: Jogador 1");
                     //   resete();
                        break;          
            }   
        }
        if(aux == 3){            
            break;
        }
        }
        if(aux == 3){
            break;
    }   
}
    }
} else {
    for(let i = 0; i < possibilidades.length; i++){
        aux = 0;
        for(let k = 0; k < 3; k++){
            for(let j = 0; j < j2.length; j++){
                
                if(possibilidades[i][k] === j2[j] ){
                    aux = aux+1;
                    if(aux == 3){
                        empate = false;
                        numeroVitoriasJogador2++;
                        placar();
                        alert("O Vencedor é: Jogador 2");
                        //resete();
                        break;
                        
            }   
        }
        if(aux == 3){            
            break;
        }
        }
        if(aux == 3){
            break;
    }   
}
    }
}

}
function empatou(empate){
    if(contadorDeJogadasPorTurno == 9 && empate == true){

    alert("Empatou")
   // resete();
    } 
    
}

function placar(){
    document.getElementById("placar").innerHTML = "Placar \n" + "Jogador 1: "+numeroVitoriasJogador1+"\n Jogador 2: "+numeroVitoriasJogador2;
}

function resete(){
    var a;
    j1 = ['','','','',''];
    j2 = ['','','','',''];
    for(let i = 0; i < 9; i++){
    document.getElementById(i).disabled = false;
    document.getElementById(i).textContent = "ㅤ";
    }


}

