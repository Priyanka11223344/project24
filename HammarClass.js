class HammarClass {

        constructor(x, y,width,height) {
            var options = {
              'density':2,
              'friction': 2.0,
              'restitution':0.5
            };
            this.body = Bodies.rectangle(x, y,width,height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
          };
          display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        
            push();
            //translate(this.body.position.x,this.body.position.y);
            rectMode(CENTER);
            fill("red");
            rect(this.body.position.x,this.body.position.y, this.width,this.height);
            pop();
          };
        };