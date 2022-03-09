class Player {
  constructor(name, badge) {
    this.name = name;
    this.badge = badge;
    this.hand = '';
  }

  takeTurn(chosenHand) {
    this.hand = chosenHand;
    return this.hand;
  }

  findRandomHand(game) {
    var randomHand = game.choices[Math.floor(Math.random() * game.choices.length)];
    return randomHand
  } 
}
