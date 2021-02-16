class Rubber{
    constructor(x, y){
        var options = {
            'restitution' :0.3,
            'friction' : 5,
            'density' :1
        }
        this.body = Bodies.ellipse(x, y, width, height, options);
        this.width = 30;
        this.height = 50;

        world.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        Translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("pink");
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    }    
}