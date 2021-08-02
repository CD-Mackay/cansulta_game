let game_board = [null, null, null, null, null, null, null, null, null];

const game_container = document.getElementsByClassName('play_area');

const reset_board = () => {
  game_container.innerHTML = "";
  game_board.map((element, index) => {
    game_container.innerHTML += `<div id="square_${index}" class="game_square">${game_board[index]}</div>`
  });
};

reset_board();