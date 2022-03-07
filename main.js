var humanPlayer = new Player('human', '🤷‍♂️');
var pokerBot = new Player('pokerBot', '🤖');
var game = new Game(humanPlayer, pokerBot);

function startGame() {
  game.setGameType('fancy');
  humanPlayer.takeTurn('22');
  pokerBot.takeTurn('RJoker');
  game.evaluateFancy(humanPlayer.hand, pokerBot.hand)
}
startGame()