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

}

export { Game };