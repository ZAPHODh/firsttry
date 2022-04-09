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
        }, 10);
    }
    updateSquare(position);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
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
        return "com o escudo"
    }
    else {
        ganhador2++
        return "com a espada";
    }
}
let espada = document.getElementById("espada");
let escudo = document.getElementById("escudo");

