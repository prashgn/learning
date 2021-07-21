class Planet {
  constructor(r, d,o) {
    this.radius = r;
    this.angle = random(TWO_PI);
    this.distance = d;
    this.planets = [];
    this.orbitspeed = o;

    this.orbit = function () {
      this.angle = this.angle + this.orbitspeed;
      if (this.planets !== null) {
        for (var i = 0; i < this.planets.length; i++) {
          this.planets[i].orbit();
        }
      }
    }

    this.show = function () {
      push();
      fill(255,100);
      rotate(this.angle); 
      translate(this.distance,0);
      //sphere(this.radius );  //3D
      ellipse(0, 0, this.radius * 2, this.radius * 2);
      if (this.planets !== null) {
        for (var i = 0; i < this.planets.length; i++) {
          this.planets[i].show();
        }
      }
      pop();
    };

    this.spanMoon = function (total,level) {
      for (var i = 0; i < total; i++) {
        var rd = this.radius / (level * 2); // this.radius * 0.5;
        var ds = random(this.radius + rd , (this.radius + rd) * 2) //random(75, 250);
        var os = random(-0.02, 0.06);
        this.planets[i] = new Planet(rd, ds ,os);
        if(level < 2){
          var num = random(0 ,3);
          this.planets[i].spanMoon(num , level + 1);
        }
        
      }
    };
  }
}
