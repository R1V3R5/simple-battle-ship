// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Game } from '../src/js/classes/game';

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

  describe('Our Game Squares', () => {
    it('should have an array of squares', () => {
      expect(game.squares).is.an('array');
    });
  });

});