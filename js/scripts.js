function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
} 

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
}