class Player {
  //me: 自分かどうか(boolean)
  //sheet: 席順
  constructor(me,sheet) {
    this.me = me;
    this.sheet = sheet;
    this.hand = [];
    this.chip = 100;
  }

  bet(num){
    this.chip = this.chip - num;
  }
}

export default Player;