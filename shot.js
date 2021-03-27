class Shot{
    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
     this.sl = Constraint.create(options);

        World.add(world, this.sl);
    }
    attach(body){
        this.sl.bodyA=body
        
        }

    re(){

        this.sl.bodyA = null;

    }

    display(){

        if(this.sl.bodyA){

            var pointA = this.sl.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
           
          line(pointA.x,pointA.y,pointB.x,pointB.y)
          
        }
    }
    
}