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
            resetFun();
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

    if (symbol == 'o' && jogador1 != '' && jogador2 != ``) {
        square.innerHTML = `<div class="card ${symbol}"><img class="card_image" src="circle.png"></div>`
    }
    else if (symbol == 'x' && jogador1 != '' && jogador2 != ``) {
        square.innerHTML = `<div class="card ${symbol}"> <img class="card_image" src="x.png"></div>`
    }
    else if (board.length[position] == 8 && winStates == false) {
        console.log(`oi`);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Você está tentando começar a partida sem escolher o nome dos participantes ou esta caixa ja está com um símbolo.'
        })
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