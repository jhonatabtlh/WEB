const tabuleiro1 = document.querySelectorAll(".tabuleiro")
const jogador1 = "X";
const jogador2 = "O";
let turno = true;

document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".tabuleiro")){
        jogar(event.target.id);
        
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
        turno = false;
    } else {
        turnoDe = jogador2;
        turno = true;
    }
    area.textContent = turnoDe;
    
    area.classList.add(turnoDe);
    document.getElementById(id).disabled = true;
    venceu(!turnoDe);
}

/*function venceu(turno){
    for(let i = 0; i < possibilidades.length(); i++){
        if(possibilidades[i] == 0 )
    }
    return true;
}

function fimDeJogo(){
    alert("FIM DE JOGO");
}

*/