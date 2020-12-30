class Drop{

    constructor(x, y){

        var option = {

            isStatic: false,
            friction: 0.1

        }

        this.body = Bodies.rectangle(x, y, 5, 5, option);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);

        rotate(angle);
        
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 5, 5);

    }

}