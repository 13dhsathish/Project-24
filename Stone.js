class Stone{
    constructor(x, y){
        var options = {
            'restitution' :0.5,
            'friction' :2,
            'density' :6
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        world.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        Translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("yellow");
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }    
}