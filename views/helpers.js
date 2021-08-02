window.onload = (event) => {
  
let game_board = ["", "", "", "", "", "", "", "", ""];

const game_container = document.getElementById("play_area");

const reset_board = () => {
  console.log('resettin the board!')
  if (game_container.innerHTML !== null) {
    game_container.innerHTML = "";
  }
  game_board.forEach((element, index) => {
    game_container.innerHTML += `<div id="square_${index}" class="game_square">${game_board[index]}</div>`;
  });
};


  console.log('page is fully loaded');
  reset_board();
};

