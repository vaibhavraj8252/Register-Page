var database;
var gameState = 0;
var playerCount = 0;
var game, player, form;
function preload() {}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  game = new Game();
  game.readGameState();
  if (gameState == 0) {
   game.playTheGame()
  }
}

function draw() {
  drawSprites();
}
