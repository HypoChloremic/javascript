class Blackhole {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
      this.mass = m;
      this.rs = (2 * G * this.mass) / (c * c);
    }
  
    pull(photon) {
      const force = p5.Vector.sub(this.pos, photon.pos);
      const r = force.mag();
      const fg = G * this.mass / (r * r);
      force.setMag(fg);
      // Changing the actual parameter being passed (not just its copy)
      photon.vel.add(force); // a modification that will propagate back to the photon
      photon.vel.setMag(c); // a modification that will propagate back to the photon
  
      if (r < this.rs) {
        photon.stop();
      }
    }
  
  
    show() {
      ellipseMode(RADIUS);
      fill(0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.rs);
  
      noFill();
      stroke(100, 100);
      strokeWeight(64);
      ellipse(this.pos.x, this.pos.y, this.rs * 3 + 32);
  
      stroke(255, 150, 0, 100);
      strokeWeight(32);
  
      ellipse(this.pos.x, this.pos.y, this.rs * 1.5 + 16);
  
  
    }
  
  
  
  }