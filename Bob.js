class Bob extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("magenta-ball-md.png");
    //Matter.Bodies.circle(x, y, radius, [options], [maxSides])
    //this.body = Bodies.circle(x, y, 150, 150); 
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    fill("white");
    super.display();
    //strokeWeight(4);
  }
}