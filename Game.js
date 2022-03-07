class Game {
  constructor(humanPlayer, pokerBot) {
    this.player1 = new Player(humanPlayer);
    this.player2 = new Player(pokerBot);
    this.player1Wins = 0;
    this.player2Wins = 0;
    this.winner = '';
    this.choices = [];
    this.gameType = '';
  };

  setGameType(gameType) {
    console.log('this is the game type ', gameType)
    if (gameType === 'classic') {
      this.choices = ['AKo', '22', 'JTs']
    }
      this.gameType = gameType;
      console.log('this is this.choices ', this.choices)
  };


  evaluateClassic(player1Hand, player2Hand) {
    if (player1Hand === player2Hand) {
      return this.winner = 'tie'
    } else if (
      (player1Hand === 'AKo' && player2Hand === 'JTs') || 
      (player1Hand === '22' && player2Hand === 'AKo') || 
      (player1Hand === 'JTs' && player2Hand === '22') 
      ) {
        this.winner = this.player1.name;
        console.log('The Human Won')
        return this.player1Wins++;
    } else {
      this.winner = this.player2.name;
      return this.player2Wins ++;
    }
  }
}
