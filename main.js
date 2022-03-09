var humanPlayer = new Player('human', '🤷‍♂️');
var pokerBot = new Player('pokerBot', '🤖');
var game = new Game(humanPlayer, pokerBot);
var imageSource = {
  'AKClassic': "./assets/AK.png",
  'JTsClassic': "./assets/JT.png",
  '22Classic': "./assets/22.png",
  'AK': "./assets/AK.png",
  '22': "./assets/22.png",
  'JTs': "./assets/JT.png",
  'AKo': "./assets/AK.png",
  'RJoker': "./assets/red-joker.svg",
  'BJoker': "./assets/black-joker.svg"
}

var buttonClassicGame = document.querySelector('.button-classic-game');
var buttonFancyGame = document.querySelector('.button-fancy-game');
var buttonPokerGame = document.querySelectorAll('.button-poker-game');
var buttonChangeGame = document.querySelector('.button-change-game');
var buttonResetScore = document.querySelector('.button-reset-score');
var handSelections = document.querySelector('.hand-selections');
var handsClassic = document.querySelector('.hands-classic');
var pokerGameChoice = document.querySelector('.poker-game-choice');
var handsFancy = document.querySelector('.hands-fancy');
var invitation = document.querySelector('.invitation');
var winnings = document.querySelectorAll('.winnings');
var allHands = document.querySelectorAll('.AK');
var selectedCard = document.querySelectorAll('.selected-card')
var buttonAllHands = document.querySelectorAll('.hand')

handsFancy.addEventListener('click', chooseHand);
buttonClassicGame.addEventListener('click', showGameView);
buttonFancyGame.addEventListener('click', showGameView);
buttonChangeGame.addEventListener('click', switchGameDifficulty);
buttonResetScore.addEventListener('click', resetScore);
handsClassic.addEventListener('click', chooseHand)

function resetScore() {
  game.player1Wins = 0
  game.player2Wins = 0
  updateWinnerCount()

}

function displayPlayerHand(event, pokerBotHand) {
  selectedCard[0].src = event.target.src
  selectedCard[1].src = imageSource[pokerBotHand]
}

function chooseHand(event) {
  if (event.target.className === 'AK' || event.target.className === 'AK joker') {
    var pokerBotHand = pokerBot.findRandomHand(game)
    humanPlayer.takeTurn(event.target.dataset.id)
    pokerBot.takeTurn(pokerBotHand)
    determineGame(event, pokerBotHand)
    updateWinnerMessage()
    hide(handSelections)
    hide(buttonResetScore)
    hide(buttonChangeGame)
    updateWinnerCount()
    highlightCards(event)
    displayPlayerHand(event, pokerBotHand)
  }
}

function determineGame(event, pokerBotHandInstance) {
  if (game.gameType === 'classic') {
    game.evaluateClassic(event.target.dataset.id, pokerBotHandInstance)
  } else {
    game.evaluateFancy(event.target.dataset.id, pokerBotHandInstance)
  }
}

function highlightCards(event) {
  event.target.style.border = '5px solid blue'
}

function resetHighlight() {
  for (var i = 0; i < allHands.length; i++) {
    allHands[i].style.border = 'none';
  }
}

function updateWinnerMessage() {
  if (game.winner === 'pokerBot') {
    invitation.innerText = 'Poker Bot took your money!'
  } else if (game.winner === 'human') {
    invitation.innerText = 'You took Poker Bot\'s money!'  
  } else {
    invitation.innerText = 'It\'s a Push!'
  }
  setTimeout(function() {
    show(handSelections)
    show(buttonChangeGame)
    show(buttonResetScore)
    buttonAllHands.disabled = true
    resetInvitationMessage()
    resetHighlight()
  }, 1900)
}

function resetInvitationMessage() {
  invitation.innerText = 'Choose Your Hand!'
}

function updateWinnerCount() {
  winnings[0].innerText = `Dollars Won: $${(game.player1Wins * 1000) - (game.player2Wins * 1000)}`
  winnings[1].innerText = `Dollars Won: $${(game.player2Wins * 1000) - (game.player1Wins * 1000)}`
}

function showGameView(event) {
  checkGameType(event.target.dataset.id)
  invitation.innerText = "Choose Your Hand!"
  hide(pokerGameChoice);
  hide(buttonPokerGame[0])
  hide(buttonPokerGame[1])
}

function checkGameType(eventId) {
  if (eventId === 'classic') {
    game.setGameType('classic')
    show(handsClassic)
  } else if (eventId === 'fancy') {
    game.setGameType('fancy')
    show(handsFancy)
  }
}

function switchGameDifficulty() {
  hide(handsClassic);
  hide(handsFancy);
  show(pokerGameChoice);
  show(buttonPokerGame[0])
  show(buttonPokerGame[1])
  invitation.innerText = "Choose Your Poker Game!"
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

