class form{
    constructor()
    {

    }
    display()
    {
        var title=createElement("h2");
        title.html("car racing game");
        title.position(700,100);

        
        var input=createInput("Name")
        input.position(700,330)
        
        var button=createButton("play")
        button.position(700,370)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            var greet=createElement("h3");
            greet.html("hello "+name)
            greet.position(700,400);
        });

        
        
        
    }
} 