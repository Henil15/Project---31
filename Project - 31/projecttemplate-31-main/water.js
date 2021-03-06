class createDrops{
  constructor(x,y){
     var options = {
          'restitution':0.1,
          'friction':0.01 
  }
  this.body = Bodies.circle(x,y,5,options);
  this.radius  = 5;
  World.add(world,this.body);

  }

update(){

}

display(){
noStroke();
fill(0,0,225);
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}


