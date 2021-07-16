class Ground{
    constructor(x,y,width,height){
        var opsition = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,opsition);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER); 
        rect(0,0,this.width,this.height);
        pop();
    }
}