import Particle from "lib/particle"

export default class Explosion {
  constructor(x, y, amount = 80, life = 100){
    this.particles = []
    this.angleStep = (Math.PI * 2) / amount
    this.life = life
    this.createParticles(x, y, amount) 
  }

  createParticles(x, y, amount){
    for (let i = 0; i < amount; i++){
      const angle = this.angleStep * i
      const speed = Math.random() * 4 + 2
      const color = `hsl(${Math.random() * 360}, 100%, 60%)`

      this.particles.push(new Particle(x, y, angle, speed, color))
    }
  }

  update(){
    this.particles.forEach(particle => particle.update())
    this.life--
  }

  draw(ctx){
    this.particles.forEach(particle => particle.draw(ctx))
  }

  isAlive(){
    return this.life > 0
  }
}