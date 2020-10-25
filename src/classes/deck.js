import Card from './card.js';
class Deck extends Array{
  constructor() {
    super();
    var rand = 0;
    var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
    //var arr = [...Array(51).key()];
    for(var i = 0; i <= 51; i++){
      //rand = Math.floor(Math.random() * arr.length);
      rand = i;
      this.push(new Card(rand));
      //this.push(rand);
      arr.splice(rand,1);
    }
  }

  deal = () => {
    console.log('deal');
  }
}

export default Deck;
