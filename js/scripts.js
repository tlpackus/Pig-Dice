function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
}

function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
} 