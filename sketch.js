const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle = null;
var gameState;
var turn;

var ver;

var engine, world;

var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   gameState = "start";
   turn = 0;
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
// Displaying the objects
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();



   }

   

if(keyWentDown("up")){
  console.log(turn);
   if(gameState !== "end"){
      
    turn = turn + 1;
    particle = new Particle(mouseX, 10, 10);
    ver = 1;

}
}
      
 

   if(ver !== null && particle !== null){

      particle.display();

        if(particle.body.position.y > 760){

          if(particle.body.position.x< 250){

            score = score+ 500
            //particle.destroy()
            ver = null;
            if(turn >= 3){
              
              gameState = "end"
        
        
           }
          }
           if(particle.body.position.x > 565){

            score = score+ 500
            //particle.destroy()
            ver = null;
            if(turn >= 3){
              
              gameState = "end"
        
        
           }
          }
          if(particle.body.position.x< 565 && particle.body.position.x>250){

            score = score+ 100
            ver = null;
            if(turn >= 3){
              
              gameState = "end"
        
        
           }
          }

        }

   }

   

   text("score: " + score, 100, 50);

   text("500", 25, 600);
   text("500", 100, 600);
   text("500", 200, 600);
   text("100", 250, 600);
   text("100", 350, 600);
   text("100", 425, 600);
   text("100", 500, 600);
   text("500", 575, 600);
   text("500", 650, 600);
   text("500", 750, 600);


   if(gameState === "end"){

    text("Game Over", 425, 50);


   }

  }

  

