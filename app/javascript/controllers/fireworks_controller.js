import { Controller } from "@hotwired/stimulus"
import Explosion from "lib/explosion"

export default class extends Controller {
  static targets = ["canvas"]
  
  connect(){
    this.explosions = []
    this.ctx = this.canvasTarget.getContext("2d")
  }

  explode(event){
    this.explosions.push(new Explosion(event.clientX, event.clientY))
  }
}