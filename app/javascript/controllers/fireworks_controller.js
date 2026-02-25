import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["canvas"]
  
  connect(){
    this.explosions = []
    this.ctx = this.canvasTarget.getContext("2d")
    console.log("Connected")
  }

  explode(event){
    console.log("Boom")
  }
}