class Ball{
    constructor(x,y,radius){
var options={
   restitution:1,
   friction:1,
   density:1,
}
this.radius=radius;

this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill ("PURPLE");
        ellipseMode (RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}