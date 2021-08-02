window.onload = (event) => {

let game_board = [null, null, null, null, null, null, null, null, null];

const game_container = document.getElementById("play_area");

const make_board = () => {
  if (game_container.innerHTML) {
    game_container.innerHTML = "";
  }
  game_board.forEach((element, index) => {
    game_container.innerHTML += `<div id="square_${index}" class="game_square">${game_board[index]}</div>`;
    if (element == playerOne || element == playerTwo) {
      document.getElementById(`square_${index}`).classList.add("selected")
    }
  });
};

const playerOne = "BLUE";
const playerTwo = "YELLOW";

const addPlayerMove = (selected, player) => {
  if (!game_board[selected]) {
    game_board[selected] = player;
    make_board();
  }
};


  console.log('page is fully loaded');
  make_board();
};

