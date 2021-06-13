class Sand {
    constructor(x,y){
    
     var options={
    
    'restitution':3,
    'friction':2,
    'density':0.5
     }
    this.body= Bodies.rectangle(x,y,5,3,options);
    this.width=50;
    this.height=30;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown");
    strokeWeight(4);
    stroke("black");

   rect(0,0,this.width,this.height);
    pop();
    }
    
    
    }