class Form{
    constructor(){
      this.title = createElement("h2")
      this.input = createInput("Name")
      this.button = createButton("Play")
      this.resetbutton = createButton("Reset")
       this.greeting = createElement("h3")
    }



         display()
         {
         
          this.title.html("Car Racing Game")
          this.title.position(width/2-40,0)

           
           this.input.position(width/2-40,height/5)
           
           
           this.button.position(width/2+140,height/5)
           this.button.mousePressed(()=>{
               this.input.hide();
               this.button.hide();
               
           
               var name = this.input.value();

               
               this.greeting.html("Hello " +name )
               this.greeting.position(width/2-40,height/5)
               //player1, player2, player3
              playerCount = playerCount  + 1;
              player.updateCount(playerCount);
              player.index = playerCount;
              player.name = name
              player.updateplayer()

              
           })

           this.resetbutton.position(width-30,height-30);
           this.resetbutton.mousePressed(()=>{
               game.update(0)
               player.updateCount(0)
               Player.updateFinishedCars(0)
               database.ref("Players").remove()
               window.location.reload;
           })
         
        }
    hideform() 
    {
     this.greeting.hide();
     this.input.hide();
     this.button.hide();
    }    
}