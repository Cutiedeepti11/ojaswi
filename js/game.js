class game{
    constructor(){}
    getState()
    {
        var gameref=database.ref('gameState')
        gameref.on("value",function(data){
        gameState=data.val()
        });
      
    }
    updateState()
    {
        
    }
    start()
    {
        if(gameState===0)
        {
            f=new form();
            f.display();
        }
    }
}