const Particles = [];
let font
let fontsize = 120;

function preload() {
     font = loadFont('assets/NotoSansKR-Regular.otf');
  }

function setup(){
    var canvas = createCanvas(window.innerWidth,window.innerHeight)
    canvas.parent('welcome');
    var particleLength = Math.floor(window.innerWidth / 10)
    
    for(let i=0; i < particleLength; i++){
        Particles.push(new particle()) 
    }

}

function draw(){
    background('#1f1f1f')
    Particles.forEach((p,index) => {
        p.update()
        p.draw(); 
        p.checkParticles(Particles.slice(index));       
    });
    textFont(font)
    textSize(fontsize)
    textAlign(CENTER, CENTER)
    fill('#eece1a')
    text('Sahil',165, 250)
    fill('#eece1a')
    text('Hawal.',210, 400)
    textSize(30)
    fill('white')
    text('Software Engineer',160, 530)
    //text('_______',230, 380)

}

class particle {
    constructor(){
        this.pos = createVector(random(width),random(height))
        this.vel = createVector(random(2,-2),random(2,-2))
        this.size = 10
    }

    update(){
        this.pos.add(this.vel)
        this.edges()
    }

    draw(){
        noStroke()
        //fill('#eece1a')
        fill('rgba(255, 255, 255, 0.5')
        circle(this.pos.x, this.pos.y, this.size)
    }

    edges(){
        if (this.pos.x > width || this.pos.x < 0){
            this.vel.x *= -1
        }
        if (this.pos.y > height || this.pos.y < 0){
            this.vel.y *= -1
        }
    }

	checkParticles(particles) {
		particles.forEach(particle => {
			const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			if(d < 120) {
                const alpha = map(d, 0, 120, 0, 0.25)
                stroke(`rgba(255, 255, 255, ${alpha})`);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
                //console.log(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
			}
		});
	}
}


