document.addEventListener(`DOMContentLoaded`, () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener(`click`, handleClick);
    })
})
function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou. O vencedor foi o jogador " + ganhador())
        }, 150);
    }
    updateSquare(position);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    if (symbol == 'o') {
        square.innerHTML = `<div class="card ${symbol}"><img class="card_image" src="circle.png"></div>`
    }
    else {
        square.innerHTML = `<div class="card ${symbol}"><img class="card_image" src="x.png"></div>`
    }
}
function resetFun() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ``) {
            square.innerHTML = '';
        }
    })
    board = [``, ``, ``, ``, ``, ``, ``, ``, ``]
    playertime = 0;
    gameOver = false;
}
function ganhador() {
    if (playertime == 0) {
        ganhador1++;
        return "usando o circulo"
    }
    else {
        ganhador2++
        return "usando o X";
    }
}
let espada = document.getElementById("espada");
let escudo = document.getElementById("escudo");

