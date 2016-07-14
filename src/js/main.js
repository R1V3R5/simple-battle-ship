import $ from 'jquery';
import _ from 'lodash';

// Classes
import { Game } from './classes/game';
import { Square } from './classes/square';

import { boards } from './boards';


// Some DOM Areas
const board = $('.board');
const hits  = $('.hits');
const misses = $('.misses');


// Square template
function sqrTpl (square) {
  return `<li class="square" id="${square.id}"></li>`;
}


// Initialize our Game
let game = new Game(_.sample(boards));


// Set up the board
game.setup();

// Event handler
board.on('click', '.square', function () {
  console.log(that);
});

// Set up the pieces
game.board.forEach( (piece) => {
  board.append(sqrTpl(piece));
});

