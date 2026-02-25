import Particle from "lib/particle"

export default class Explosion {
  constructor(x, y, amount = 80, life = 100){
    this.particles = []
    this.angleStep = (Math.PI * 2) / amount
    this.life = life
    this.createParticles(x, y, amount, life) 
  }

  createParticles(x, y, amount){
    for (let i = 0; i < amount; i++){
      const angle = this.angleStep * i
      const speed = Math.random()
      const color = "red"

      this.particles.push(new Particle(x, y, speed, angle, color))
    }
  }

  update(){
    this.life--
  }

  draw(){
    this.particles.forEach(particle => particle.draw())
  }

  isAlive(){
    return this.life > 0
  }
}