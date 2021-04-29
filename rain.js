class rain{
    constructor(x,y){
        var options = {
            'restitution':.5,
            'friction':1,
            'density':1 
        }
        this.radius = 5;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        if(pos.y>width){
            this.updatepos();
    }
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(220);
        noStroke()
        ellipse(0,0, this.radius*2);
        pop();
    }
    updatepos(){
        Matter.Body.setPosition(this.body,{x:random(width),y:0})
        Matter.Body.setVelocity(this.body,{x:0,y:0})
    }
}