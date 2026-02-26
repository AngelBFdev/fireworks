export default class Particle {
  constructor(x, y, angle, speed, color, ){
    this.x = x
    this.y = y
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.color = color
  }

  update(){
    this.x += this.vx
    this.y += this.vy
    this.vy += .05
  }

  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}