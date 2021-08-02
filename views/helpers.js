
/* Constant declarations */
let game_board = [null, null, null, null, null, null, null, null, null];
let numTurnsLeft = 9;
let bluesTurn = true;
const playerOne = "BLUE";
const playerTwo = "YELLOW";




const check_three = (a, b, c) => {
  if (game_board[a] === playerOne || game_board[a] === playerTwo) {
    return (game_board[a] == game_board[b] && game_board[b] == game_board[c]);
  } else {
    return false;
  }
};

const check_for_winner = () => {
  for (let i = 0; i < 9; i+= 3) {
    if (check_three(i, i + 1, i + 2)) {
      return game_board[i]
    }
  }
  for (let i = 0; i < 3; i+= 1) {
    if (check_three(i, i + 3, i + 6)) {
      return game_board[i]
    }
  }
  if (check_three(0, 4, 8)) {
    return game_board[0]
  }
  if (check_three(2, 4, 6)) {
    return game_board[2]
  }
  return ""
};

const turnComplete = () => {
  console.log('running turnComplete function!')
  if (check_for_winner()) {
    document.getElementById('winner').innerText = (`${check_for_winner()} Wins!`)
  }
};


const addPlayerMove = (selected) => {
  if (!game_board[selected]) {
    game_board[selected] = bluesTurn ? playerOne : playerTwo;
    numTurnsLeft--;
    console.log(numTurnsLeft);
  } else if (game_board[selected]) {
      alert('Square has already been taken!')
    }
    if (bluesTurn) {
      document.getElementById(`square_${selected}`).classList.add("playerOneSelect")
      bluesTurn = false;
      document.getElementById('turn_announcer').innerText = "Yellow's turn!"
    } else {
      bluesTurn = true;
      document.getElementById(`square_${selected}`).classList.add("playerTwoSelect")
      document.getElementById('turn_announcer').innerText = "Blue's turn!";
    }
  turnComplete();
};

const make_board = (game_container) => {
  if (game_container.innerHTML) {
    game_container.innerHTML = "";
  }
  game_board.forEach((element, index) => {
    game_container.innerHTML += 
    `<div id="square_${index}" class="game_square" onClick="addPlayerMove(${index})">
    </div>`;
    if (element == playerOne) {
      document.getElementById(`square_${index}`).classList.add("playerOneSelect")
    } else if (element == playerTwo) {
      document.getElementById(`square_${index}`).classList.add("playerTwoSelect")
    }
  });
};

const reset_board = (game_container) => {
  game_board = [null, null, null, null, null, null, null, null, null];
  document.getElementById('winner').innerText = "";
  make_board(game_container);
};

const make_new_game = () => {
  const game_container = document.getElementById("play_area");
  reset_board(game_container);
};




/* Window Onload Event! */
window.onload = (event) => {
  
  const game_container = document.getElementById("play_area");
  make_board(game_container);
  document.getElementById('turn_announcer').innerText = "Blue's turn!";


}; // End of onLoad





