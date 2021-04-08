class Paper {
    constructor(x,y){
        var options = {
            restitution : 0.2,
            friction : 0,
            density :1.2
        }
            this.body = Bodies.circle(x,y,50,options);
            this.width = 50;
            this.height = 50;
            this.image = loadImage("paper.png")
            World.add(world,this.body);
            

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        
        push()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(angle)

        imageMode(CENTER);
        image(this.image,0,33,this.width,this.height);
        pop()

       
    }
}