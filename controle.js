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
    venceu(!turno);
}

function venceu(turno){
    const verVencedor = possibilidades.some((comb) => {
        return comb.every((index) => {
            return tabuleiro1[index].classList.contains(vez)
        })
    });
    
}