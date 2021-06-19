class Player{
    constructor(){
      this.name=null
      this.distance=0
      this.index=null
      this.rank=0
    }   //index - player1, player2, player3, player4 - 1,2,3,4 - > playerCount


        getPlayercount(){
            var dbref = database.ref("playerCount")
            dbref.on("value",function(data)
            {
               playerCount=data.val()
            })
        }    
        updateCount(count)
        {
          database.ref("/").update({playerCount   :   count})
        }
      updateplayer()
      { //Players/player1/name  player2/name
        var playerIndex = "Players/player" +player.index
        database.ref(playerIndex).update({name   :  this.name,
                                          distance : this.distance,
                                          rank     :   this.rank})
      }
      static getAllPlayersInfo(){
        var dbref = database.ref("Players");
        dbref.on("value",(data)=>{
          allPlayers = data.val()
        })
        
        

      }
      
      getFinishedCars(){
        var dbref = database.ref("finishedCars")
        dbref.on("value",(data)=>{
         this.rank = data.val()  
        })
      }

     static updateFinishedCars(finishedCount){
       database.ref("/").update({finishedCars   :   finishedCount})

       
       var dbref = database.ref("finishedCars")
       dbref.on("value",(data)=>{
        finishedCars = data.val()  
       })



     }

}    
