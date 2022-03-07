class Player {
  constructor(name, badge) {
    this.name = name;
    this.badge = badge;
    this.hand = '';
  }

  takeTurn(chosenHand) {
    this.hand = chosenHand;
    console.log('this is this.hand ', this.hand)
    return this.hand;
  }

}