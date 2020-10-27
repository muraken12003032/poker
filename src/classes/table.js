import Deck from './deck.js';

class Table {
  constructor() {
    this.deck = new Deck;
    this.field = [];
    this.garbage = [];
    this.btn = 0;
    this.player_hand = [];
    this.enemy_hand = [];
  }
}

export default Table;
