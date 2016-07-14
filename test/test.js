// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Game } from '../src/js/classes/game';
import { Square } from '../src/js/classes/square';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


// Test our Game Class
describe('About our Game', () => {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  describe('Creation of our Game', () => {
    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });
  });

  describe('Our Game Board', () => {
    it('should have an array of squares', () => {
      expect(game.board).is.an('array');
    });
  });

  describe('Our scoreboard', () => {
    it('should have a hit count of 0', () => {
      expect(game.scoreboard.hits).to.equal(0);
    });
    it('should have a misses count of 0', () => {
      expect(game.scoreboard.misses).to.equal(0);
    });
    it('should increase hits when a hit is made', () => {
      game.attack(2);
      expect(game.scoreboard.hits).to.equal(1);
    });
    it('should increase misses when a miss is made', () => {
      game.attack(3);
      expect(game.scoreboard.misses).to.equal(1);
      game.attack(3);
      expect(game.scoreboard.misses).to.equal(2);
    });
  });

});

// 0 = water
// 1 = ship
// 2 = hit
// 3 = miss

describe('About our squares', () => {

  let square;
  beforeEach(() => {
    square = new Square('s1', 1);
  });

  describe('Creating squares', () => {
    it('should be an instance of Square', () => {
      expect(square).to.be.an.instanceof(Square);
    });
  });

  describe('All the Squares properties', () => {
    it('should have an id', () => {
      expect(square.id).to.be.a('string');
    });
    it('should have an initial state', () => {
      expect(square.state).to.be.a('number');
    });
  });

  describe('Ability to make hits & misses', () => {
    it('should change state to a hit', () => {
      square.guess();
      expect(square.state).to.equal(2);
    });
    it('should change state to a miss', () => {
      let square2 = new Square('s2', 0);
      square2.guess();
      expect(square2.state).to.equal(3);
    });
  });

});