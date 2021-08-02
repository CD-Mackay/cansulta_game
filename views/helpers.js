let game_board = [null, null, null, null, null, null, null, null, null];

const game_container = document.getElementsByClassName('play_area');

const reset_board = () => {
  console.log('resettin the board!')
  game_container.innerHTML = "";
  game_board.forEach((element, index) => {
    console.log(game_container.innerHTML);
    game_container.innerHTML += `<div id="square_${index}" class="game_square">${game_board[index]}</div>`;
  });
};
console.log(game_container);

window.onload = (event) => {
  console.log('page is fully loaded');

  
  reset_board();
  console.log(game_container.innerHTML);
};

