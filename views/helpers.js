

let game_board = [null, null, null, null, null, null, null, null, null];
let numTurnsLeft = 9;
let bluesTurn = true;
const playerOne = "BLUE";
const playerTwo = "YELLOW";

const addPlayerMove = (selected) => {
  if (!game_board[selected]) {
    game_board[selected] = bluesTurn ? playerOne : playerTwo;
    console.log(game_board);
    if (bluesTurn) {
      bluesTurn = false;
    } else {
      bluesTurn = true;
    }

  }
};


window.onload = (event) => {

  const game_container = document.getElementById("play_area");


  const make_board = () => {
    if (game_container.innerHTML) {
      game_container.innerHTML = "";
    }
    game_board.forEach((element, index) => {
      game_container.innerHTML += 
      `<div id="square_${index}" class="game_square" onClick="addPlayerMove(${index})">
        ${game_board[index]}
      </div>`;
      if (element == playerOne || element == playerTwo) {
        document.getElementById(`square_${index}`).classList.add("selected")
      }
    });
  };


  make_board();
};

