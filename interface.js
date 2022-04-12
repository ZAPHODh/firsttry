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
            Swal.fire(
                'Parabéns!',
                'O vencedor foi: ' + raelzada()
            )
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
        square.innerHTML = `<div class="card ${symbol}"> <img class="card_image" src="x.png"></div>`
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
        return "círculo!"
    }
    else {
        ganhador2++
        return "X!";
    }
}


function jogadores() {
    let j1 = document.getElementById("jogador1")
    let j2 = document.getElementById("jogador2")

    jogador1 = (j1.value);
    jogador2 = (j2.value);


}

function raelzada() { if (ganhador() == "círculo!") { return jogador1 } else { return jogador2 } }