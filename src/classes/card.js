class Card {

  constructor(number) {
    this.numeric = this.get_numeric(number);
    this.suit = this.get_suit(number);
    this.is_visible = false;
  }


  get_numeric(number) {
    return ( number % 13 ) + 1;
  }

  get_suit(number) {
    let suits = ['spade', 'heart', 'diamond', 'club'];
    return suits[(number % 4)];
  }
}

export default Card;
