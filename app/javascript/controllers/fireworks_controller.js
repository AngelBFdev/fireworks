import { Controller } from "@hotwired/stimulus"
import Explosion from "lib/explosion"

export default class extends Controller {
  static targets = ["canvas"]
  
  connect(){
    this.explosions = []
    this.ctx = this.canvasTarget.getContext("2d")
    this.draw()
    this.resize()
    window.addEventListener("resize", () => this.resize())
  }

  resize(){
    this.canvasTarget.width = window.innerWidth
    this.canvasTarget.height = window.innerHeight
  }

  explode(event){
    this.explosions.push(new Explosion(event.clientX, event.clientY))
  }

  draw = () => {
    requestAnimationFrame(this.draw)
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
    this.ctx.fillRect(0, 0, this.canvasTarget.width, this.canvasTarget.height)
    this.tick()
  }

  tick(){
    this.explosions.forEach(explosion => {
      explosion.draw(this.ctx)
      explosion.update()
    })

    this.explosions = this.explosions.filter(explosion => explosion.isAlive())
  }
}