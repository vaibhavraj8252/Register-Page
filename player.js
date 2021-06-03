class Player{
    constructor(){
        this.playerName="";
        this.distance=0;
    }
   readPlayerCount(){
    var playerCountValue= database.ref("playerCount")
    playerCountValue.on("value",function(data){
        playercount=data.val()
    })}
    
   writePlayerCount(x){
    database.ref("/").update({
        playerCount:x
       })
    }
   }