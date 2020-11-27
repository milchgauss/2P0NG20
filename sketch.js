//Decorative dots down the middle:
var playerDots=[];

//Player points:
var p1Points=0;
var p2Points=0;

//Ball variables
var startX=Math.floor(Math.random()*50)+350;
var startY=50;
var r=10;
var dx=5;
var dy=5;



var begin=false;
//Paddle1 variables

var paddleXPos;
var paddleYpos;

var paddleW=10;
var paddleH=60;

var paddledx=5;
var paddledy=5;
// Paddle2 variables

var paddle2XPos;
var paddle2Ypos;

var paddle2W=10;
var paddle2H=60;

var paddle2dx=5;
var paddle2dy=5;

var canHeight=370;
var canWidth=597;


function setup() {
    
  createCanvas(canWidth, canHeight);

}
function draw() {
    
  background(0);
    //Will draw the ball object
    //Set movement for the ball object
    //Set conditions for the ball object
 
for (var i=400;i>=0;i-=10){
    circle(canWidth/2,i,5);
}
    
    
var d=255;
for (var i=50;i>0;i-=6){
fill(0,255,255,45);
if(i<60){noStroke();}
circle(startX,startY,i);
d-=25;
}
    /** Previous circle
    circle(startX,startY,r*2);
    **/
    
    startX+=dx;
    startY+=dy;
 
    /**
    if(startX==r|startX>590){
        dx*=-1;
    }
    **/
     
      if(startY==0|startY>360){
        dy*=-1;
    }
 
    
  if (!begin) {
  paddleXPos = 20;
  paddleYpos = 135;
      
  paddle2XPos=570;
  paddle2Ypos=135;
      
  begin = true;
}
//Draw paddles: I programmed "glow-skins" in Javascript by calling a loop with p5.js functions:
 
 var d=50;
for (var i=40;i>0;i-=2){
fill(0,255,255,45);
if(i<60){noStroke();}
rectMode(CENTER);
rect(paddleXPos,paddleYpos,i-20,i+30,30,30,30,30);
d-=5;
}

var e=50;
for (var i=40;i>0;i-=2){
fill(0,255,255,45);
if(i<60){noStroke();}
rectMode(CENTER);
rect(paddle2XPos,paddle2Ypos,i-20,i+30,30,30,30,30);
d-=5;
}
    /** Previous rectangles
 rect(paddleXPos,paddleYpos,5,60);
 rect(paddle2XPos,paddle2Ypos,5,60);
 **/

 //Collision control for paddles: Don't go off the screen!
if(paddleYpos<=0){
    paddleYpos=0;
}
if(paddleYpos>=320){
    paddleYpos=320;
}
 
if(paddle2Ypos<=0){
    paddle2Ypos=0;
}
if(paddle2Ypos>=320){
    paddle2Ypos=320;
}
//Collision detection for when the ball hits paddle X or Y
        
    if(startY>paddleYpos&&startY<paddleYpos+60&&startX<=paddleXPos){
        console.log("hit!");
        dx*=-1;
        dy*=-1;
        
        p1Points+=30;
        document.getElementById('points').innerHTML=p1Points;
        
        
    }
    
 
      if(startY>paddle2Ypos&&startY<paddle2Ypos+60&&startX>=paddle2XPos-10){
          
        console.log("hit!");
        dx*=-1;
        dy*=-1;
        p2Points+=30;
        document.getElementById('pointstwo').innerHTML=p2Points;
          
        
    }
    
     if(startX<=0){
        p1Points-=1;
        document.getElementById('points').innerHTML=p1Points;
        begin=false;
    }
    if (startX>=597){
        p2Points-=1;
        document.getElementById('pointstwo').innerHTML=p2Points;
        
        begin=false;
    }
 
    
}

function keyPressed() {
    // Paddles control: Might change 'a' and 's' to 'a' and 'x'. More flexible to click
    //Up and down that way.
    
    
  if (keyCode === UP_ARROW) {
    paddleYpos -= 50;
  } else if (keyCode === DOWN_ARROW) {
    paddleYpos += 50;
  }
    else if (keyCode === 87) {
    paddle2Ypos -= 50;
  } else if (keyCode === 83) {
    paddle2Ypos += 50;
  }
}