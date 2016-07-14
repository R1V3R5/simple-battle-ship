import { Square } from './square';

class Game {

  constructor (board) {
    this.board = board || [];
    this.scoreboard = {
      hits: 0,
      misses: 0
    };
  }

  attack (attackType) {
    if (attackType === 2) {
      this.scoreboard.hits ++;
    } else if (attackType === 3) {
      this.scoreboard.misses ++;
    }
  }

  setup () {
    let newBoard = [];
    this.board.forEach( (row, rowIndex) => {
      row.forEach( (value, colIndex) => {
        // janky way to create a unique id with row/col index
        let id = 'i' + rowIndex + '-' + colIndex;
        let square = new Square(id, value);
        newBoard.push(square);
      });
    });
    this.board = newBoard;
  }

}

export { Game };