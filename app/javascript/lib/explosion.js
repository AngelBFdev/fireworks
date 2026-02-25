export default class Explosion {
  constructor(x, y, amount = 80, life = 100){
    this.particles = []
    this.angleStep = (Math.PI * 2) / amount
    this.createParticles(x, y, amount, life) 
  }

  createParticles(x, y, amount, life){
    console.log("Boom")
  }
}