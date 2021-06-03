class Game{
    constructor(){

    }
  readGameState(){
  var gameStateValue= database.ref("gameState")
  gameStateValue.on("value",function(data){
      gameState=data.val()
  })
}

   writeGameState(x){
   database.ref("/").update({
    gameState:x
   })
}
 playTheGame(){
    player = new Player();
    player.readPlayerCount()
    form= new Form();
    form.register();
 }
}

