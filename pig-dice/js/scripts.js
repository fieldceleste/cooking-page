// <!--Back End for Game-->

function Game (){
  this.players = []
  
}
Game.prototype.addPlayer = function(player){
  this.players.push(player);
}
// Game.prototype.roll

//  Backend for Player//
function Player() {
  this.roll = 0;
  this.score = 0; 
  this.total = 0;
}
Player.prototype.diceRoll = function(){
  var turnNumber = Math.floor(Math.random() * 6) +1;
  console.log(turnNumber);
}


//Dice















//<--Front End-->