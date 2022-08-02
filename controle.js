const tabuleiro1 = document.querySelectorAll(".tabuleiro")
const jogador1 = "X";
const jogador2 = "O";
const reseta = null;
let turno = true;
var nomeJogador1 = "Jogador 1";
var nomeJogador2 = "Jogador 2";
var j1 = ['','','','',''];
var j2 = ['','','','',''];
var empate = true;
var numeroVitoriasJogador1 = 0;
var numeroVitoriasJogador2 = 0;
var numeroDeEmpates = 0;
var contadorDeJogadasPorTurno = 0;
var linhaParaMarcar = 0;
placar();
document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".tabuleiro")){
        jogar(event.target.id);
        
    }
    
})

document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".novaPartida")){
        resete();
        
    }
    
})

document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".alterarNomes")){
        alteraNome();
        
    }
    
})

document.addEventListener("click", (event) => { 
    
    if(event.target.matches(".novoJogo")){
        location.reload();
        
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
        empatou(empate);
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
                        linhaParaMarcar = i;
                        empate = false;
                        numeroVitoriasJogador1++;
                        placar();
                        desabilitaTudo()
                        marcarRetaVencedora(i);
                        alert("O Vencedor é: "+nomeJogador1);
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
                        linhaParaMarcar = i;
                        empate = false;
                        numeroVitoriasJogador2++;
                        placar();
                        desabilitaTudo();
                        marcarRetaVencedora(linhaParaMarcar);
                        alert("O Vencedor é: "+nomeJogador2);
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
    numeroDeEmpates++
    placar();
    alert("Empatou");
    desabilitaTudo();
    } 
    
}

function placar(){
    document.getElementById("placar").innerHTML = nomeJogador1+": "+numeroVitoriasJogador1
    +"<br>"+nomeJogador2+": "+numeroVitoriasJogador2+"<br> Empates: "+numeroDeEmpates;
}

function resete(){
    j1 = ['','','','',''];
    j2 = ['','','','',''];
    empate = true; 
    contadorDeJogadasPorTurno = 0;
    for(let i = 0; i < 9; i++){
    document.getElementById(i).disabled = false;
    document.getElementById(i).textContent = "ㅤ";
    var auxiliar = document.getElementById(i).id;
    document.getElementById(auxiliar).style.backgroundColor = "aquamarine"
    }


}

function desabilitaTudo(){

    for(let i = 0; i < 9; i++){
    document.getElementById(i).disabled = true;
    
        
        
    }
}


function marcarRetaVencedora(a){
    var auxiliar =  0;

    for(let i = 0; i < 9; i++){
        auxiliar = document.getElementById(i).id
        for(var k = 0; k < 3; k++){
        if(auxiliar == possibilidades[a][k]){
            document.getElementById(auxiliar).style.backgroundColor = "yellow"
            break;
        }
    }
        }
}

function alteraNome(){
    var input1 = document.querySelector("#nomeJogador1");
    var input2 = document.querySelector("#nomeJogador2");
    if(input1.value != ''){
    nomeJogador1 = input1.value;
}
if(input2.value != ''){
    nomeJogador2 = input2.value;
   
}
placar();
}