class Block1 {
    constructor(x,y,width,height){
        var options={
            'isStatic': false,
            'restitution': 0.7,
            'friction': 0.7,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.visibility = 255
    }
    display(){
        if(this.body.speed < 4.2){
        var pos = this.body.position;
        fill(212, 115, 214)
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height)
        }
        else{
            World.remove(world,this.body);
            this.visibility = this.visibility - 100;
            tint(255,this.visibility)

        }
    }
}