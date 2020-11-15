class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        
        var options = {
            //JSON format of storing data
            'bodyA': bodyA,
            'bodyB': bodyB,
            'length': 17, // distance between bodies
            //'stiffness': 0.0004, // it will be of elastic material
        
           'pointB':{x:this.offsetX, y:this.offsetY},
           
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        push();
        stroke("blue");
        strokeWeight(4);
        // line instruction needs x, y coordinate of starting point and the end point
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}