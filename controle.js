const tabuleiro1 = document.querySelectorAll(".tabuleiro")
const jogador1 = "X";
const jogador2 = "O";
let turno = true;
var j1 = ['','','','',''];
var j2 = ['','','','',''];

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
        area.classList.add(turnoDe);
        document.getElementById(id).disabled = true;
        for(let i = 0; i <j1.length; i++){
            if(j1[i] == ''){
                j1[i] = area;
                break;
            }
        }
        venceu(turno);
        turno = false;
    } else {
        
        
        turnoDe = jogador2;
        area.classList.add(turnoDe);
        document.getElementById(id).disabled = true;
       for(let n = 0; n <j2.length; n++){
            if(j2[n] == ''){
                j2[n] = area;
                break;
            }
        }
        turno = true;
    }
    area.textContent = turnoDe;
    
    area.classList.add(turnoDe);
    

    

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
                    console.log(j1[j])
                    console.log(possibilidades[i][k])
                    aux = aux+1;
                    if(aux == 3){
                        console.log(aux);
                        //alert("O Vencedor é: Jogador 1");
                        break;
                        
            }   
        }
        if(aux == 3){
            console.log(aux);
            
            break;
        }
        }
        if(aux == 3){
            console.log(aux);
    
            break;
    }   
}
    }
} else {
    for(let i = 0; i < possibilidades.length; i++){
        aux = 0;
        for(let k = 0; k < 3; k++){
            for(let j = 0; j < j2.length; j++){
                if(possibilidades[i][k] == j2[j] ){
                    aux = aux+1;
                    if(aux > 2){
                        console.log(aux);

                        break;
                        
                    
            }
        }
        }
        }
    }
}

}




