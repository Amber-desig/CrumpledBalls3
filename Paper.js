class Paper {
    constructor(x, y, radius) {
      var options = {
           restitution:0.001,
           isStatic:false,
           friction:0.5,
           density:0.77
      }
  
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }

  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(1);
      stroke("black");
      fill("white");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };