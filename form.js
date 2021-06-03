class Form{
    constructor(){
    this.heading=createElement('h1')
    this.inputBox=createInput("Enter you good name.")
    this.registerB=createButton("Register")
    this.greetE=createElement('h1')
    }

   register(){
     this.heading.position(100,100)
     this.heading.html("Welcome to the game.")
     this.inputBox.position(150,200)
     this.registerB.position(200,300)
     this.registerB.mousePressed(()=>{
         this.inputBox.hide()
         this.registerB.hide()
         this.heading.hide()
         playerCount=playerCount+1;
         player.writePlayerCount(playerCount)
         player.playerName=this.inputBox.value()
         this.greetE.html("Hello "+player.playerName+".")
         this.greetE.position(100,150)
     })
   }
}

