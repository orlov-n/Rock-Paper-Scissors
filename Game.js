class Game {
  constructor(humanPlayer, pokerBot) {
    this.player1 = humanPlayer;
    this.player2 = pokerBot;
    this.player1Wins = 10;
    this.player2Wins = 10;
    this.winner = '';
    this.choices = [];
    this.gameType = '';
  };

  setGameType(gameTypeInput) {
    if (gameTypeInput === 'classic') {
      this.choices = ['AKClassic', '22Classic', 'JTsClassic']
    } else {
      this.choices = ['AKo', '22', 'JTs', 'BJoker', 'RJoker']
    }
      this.gameType = gameTypeInput;
  };


  evaluateClassic(player1Hand, player2Hand) {
    if (player1Hand === player2Hand) {
      this.winner = 'tie'
      return 
    } else if (
      (player1Hand === 'AKClassic' && player2Hand === 'JTsClassic') || 
      (player1Hand === '22Classic' && player2Hand === 'AKClassic') || 
      (player1Hand === 'JTsClassic' && player2Hand === '22Classic') 
      ) {
        this.winner = this.player1.name;
        this.player1Wins++;
    } else {
      this.winner = this.player2.name;
      this.player2Wins++;
    }
  }

  evaluateFancy(player1Hand, player2Hand) {
    if (player1Hand === player2Hand) {
      return this.winner = 'tie' 
    } else if (
      (player1Hand === 'AKo' && (player2Hand === 'JTs' || player2Hand === 'BJoker')) ||
      (player1Hand === '22' && (player2Hand === 'AKo' || player2Hand === 'RJoker')) ||
      (player1Hand === 'JTs' && (player2Hand === '22' || player2Hand === 'BJoker')) ||
      (player1Hand === 'BJoker' && (player2Hand === '22' || player2Hand === 'RJoker')) ||
      (player1Hand === 'RJoker' && (player2Hand === 'AKo' || player2Hand === 'JTs'))
    ) {
      this.winner = this.player1.name;
      return this.player1Wins++;
    } else {
      this.winner = this.player2.name;
      return this.player2Wins++;
    }
  }
  resetGame() {
    this.winner = '';
  }
}

// AK (rock)> JTs && BJ
// 22 (paper)> AK && RJ
// JTs (scissors) > 22 && BJ
// BJ (alien)> 22 && RJ
// RJ (hard on)> Ak && JTs