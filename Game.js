class Game {
  constructor(humanPlayer, pokerBot) {
    this.player1 = new Player(humanPlayer);
    this.player2 = new Player(pokerBot);
    this.gameData = {
      deuces: 'deuces',
      aceKing: 'AKo',
      jackTen: 'JTs', 
      queenNine: 'Q9o',
    };

    this.winningMoves = [

    ]
    this.gameType = '';
  }

  setGameType(gameType) {
    return this.gameType = gameType;
  }
}
