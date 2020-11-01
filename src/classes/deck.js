import Card from './card.js';
class Deck extends Array{
  constructor() {
    super();
    var rand = 0;
    var arr = [];
    while(arr.length < 52){
      rand = this.int_random(53,1)-1;
      if(arr.indexOf(rand)<0){
        arr.push(rand);
      }
    }
    arr.forEach(e => this.push(new Card(e)));
  }

  deal(players) {
    //カードは各プレイヤーに2枚配るので i<2
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < players.length; j++){
        players[j].hand.push(this.pull());
      }
    }
  }

  int_random(max,min) {
    return Math.floor(Math.random()*(max-min)+min);
  }

  pull() {
    return this.shift();
  }
}

export default Deck;
