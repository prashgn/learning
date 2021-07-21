class Drop {
	constructor() {
		this.x = random(width);
		this.y = random(-500,-100);
		/* this.len = random(10,20);
		this.yspeed = random(6,10); */ 
		
		this.z = random(0,20);
		this.len    = map(this.z,0,20,10,20); //this mean it would be thicker, longer, faster if its closer to 20 . 
		this.yspeed = map(this.z,0,20,6,10); 

	}

	fall() {
		this.y = this.y + this.yspeed;
		var gravity = map(this.z,0,20,0.01,0.05);
		this.yspeed = this.yspeed + gravity;
		
		if(this.y > height){
			this.y = random(-500,-100);
			this.yspeed =  map(this.z,0,20,6,10);;
		}
		
	}

	display() {
		var thick = map(this.z,0,20,1,3);
		strokeWeight(thick);
		stroke(138,43,226);
		line(this.x,this.y,this.x,this.y + this.len);
	}

	
}