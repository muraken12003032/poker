import Deck from './deck.js';
import Player from './player.js';

class Table {
  constructor() {
    this.deck = new Deck();
    this.field = [];
    this.garbage = [];
    this.btn = 0;
    this.players = [];
    this.pot = 0;

    //常に自分は着席した状態
    this.join(true,0);
  }

  join(me,sheet) {
      this.players.push(new Player(me,sheet));
  }

  payoff(player,pot) {
    this.pot += pot;
    console.log('勝者にチップを渡すmethod');
  }

  judge(players) {
    console.log('誰が勝ったか判定するmethod');
  }

  join_enemies(number_of_enemy){
    for(let i = 0;i<number_of_enemy;i++){
      this.join(false,i+1);
    }
  }
}

export default Table;