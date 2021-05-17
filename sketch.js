 var hypnoticBall, database;
var position;
var f,g;
var gameState=0
var playercount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  g= new game();
  g.start();
  console.log(gameState)

}

function draw(){
 // background("white");
  
   
  
}



