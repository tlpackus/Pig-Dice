function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.roll = function() {
  return Math.floor((Math.random() * 6) + 1);
}


Game.prototype.winnerCheck = function(player) {
  if (player.gameScore >= 100) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.tallyTurnScore = function(player) {
  let rollValue = this.roll()
  if (rollValue > 1) {
    player.turnScore += rollValue;
  } else {
    player.turnScore = 0;
  }
}

Game.prototype.tallyGameScore = function(player) {
  player.gameScore += player.turnScore;
  player.turnScore = 0;
}

Game.prototype.switchCurrentPlayer = function() {
  if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
}

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
}

// Pseudo User Interface Logic to facilitate testing -------

let game1 = new Game()
let player1 = new Player("Michael");
game1.addPlayer(player1);
game1.tallyTurnScore(player1);
console.log(game1);
// game1.tallyGameScore(player1);
// console.log(game1);
console.log(game1.winnerCheck(player1));
