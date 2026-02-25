import { Controller } from "@hotwired/stimulus"
import Explosion from "lib/explosion"

export default class extends Controller {
  static targets = ["canvas"]
  
  connect(){
    this.explosions = []
    this.ctx = this.canvasTarget.getContext("2d")
    this.draw()
  }

  explode(event){
    this.explosions.push(new Explosion(event.clientX, event.clientY))
  }

  draw = () => {
    requestAnimationFrame(this.draw)
    this.tick()
  }

  tick(){
    this.explosions.forEach(explosion => {
      explosion.draw()
      explosion.update()
    })

    this.explosions = this.explosions.filter(explosion => explosion.isAlive())
  }
}