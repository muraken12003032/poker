import Card from './card.js';
class Deck extends Array{
  constructor() {
    super();
    var rand = 0;
    var arr = [];
    for(var i = 0;i<52;i++) { arr.push(i); }
    for(var j = 0; j <= 51; j++){
      rand = Math.floor(Math.random() * arr.length);
      //rand = i;
      console.log(rand);
      this.push(new Card(rand));
      arr.splice(rand,1);
    }
  }

  deal(players) {
    //カードは各プレイヤーに2枚配るので i<2
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < players.length; j++){
        players[j].hand.push(this.pull());
      }
    }
  }

  pull() {
    return this.shift();
  }
}

export default Deck;
