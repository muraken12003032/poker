class Card {

  constructor(number) {
    this.numeric = this.get_numeric(number);
    this.suit = this.get_suit(number);
    this.mark = this.get_mark(this.suit);
    this.is_visible = false;
  }

  get_numeric(number) {
    return ( number % 13 ) + 1;
  }

  get_suit(number) {
    let suits = ['spade', 'heart', 'diamond', 'club'];
    return suits[(number % 4)];
  }

  //カードを表示するときにマークにする
  get_mark(suit) {
    switch(suit) {
      case 'spade':
        return '♠️';
      case 'heart':
        return '❤️';
      case 'diamond':
        return '🔹';
      case 'club':
        return '♣️';
      default:
        return 'joker';
    }
  }
}

export default Card;
