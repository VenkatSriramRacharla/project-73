class Box{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0,
        }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = 70;
    this.height = 70;
    World.add(world, this.body)
    }
    display(){
        push();
        fill("cyan")
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}