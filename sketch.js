var mario,bg,obstacles,og;
var play=1;
var end=0;
var gameState=play;

function preload()
{
    Mario=loadAnimation("Mario1.png","Mario2.png")
    Background=loadImage("Grass.jpg")
    Obstacles=loadImage("Obstacles2.jpg")

}
function setup()
{
    createCanvas(1000,1000)

    bg=createSprite(500,500,1000,1000)
    bg.velocityX=-5
    bg.addImage(Background)
    bg.scale=2

    og=createGroup()
    
    mario=createSprite(100,690,40,40)
    //mario.velocityX=5;
    mario.addAnimation("Running",Mario)
    mario.scale=1.5

    ground=createSprite(400,850,1000,10)
    ground.visible=false;
    
    
    


}
function draw()
{
    drawSprites()  
    
    if(gameState===play)
    {
        if(frameCount%150===0)
        {
            obstacles=createSprite(1000,750,20,20)
            obstacles.addImage(Obstacles)
            obstacles.velocityX=-5
            og.add(obstacles)


            
        } 

        if(bg.x<0)
    {
        bg.x=bg.width/2
    } 

    if(keyDown("SPACE"))
    {
        mario.velocityY=-17
        
    }

    mario.velocityY=mario.velocityY+0.5

    if(mario.isTouching(og))
        {
           gameState=end;
         
           
            
        }
    
    }

    else if(gameState===end)
    {
        bg.velocityX=0
        og.setVelocityXEach(0)
        
        textSize(20)
        fill("blue")
        text("YOU LOOSE!! BETTER LUCK NEXT TIME!!,YOU LOST :(",250,400)
           
            
        
    }

    textSize(20)
    fill("red")
    text("Press reload for another chance!!!",607,350)
    


    
    
    
    

    fill("black")
    noStroke()
    text(mouseX,100,100)
    text(mouseY,120,120)

    mario.collide(ground)


   
    
   

   
}