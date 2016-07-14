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

  describe('Creation of our Game', () => {
    it('should be an instance of Game', () => {
      let g = new Game();
      expect(g).to.be.an.instanceof(Game);
    });
  });

});