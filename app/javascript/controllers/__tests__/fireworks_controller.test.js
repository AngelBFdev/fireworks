import { describe, it, expect, vi, beforeEach } from "vitest"
import FireworksController from "../fireworks_controller"
import Explosion from "lib/explosion"

describe("FireworksController", () => {
  let controller
  let event

  beforeEach(() => {
    controller = new FireworksController()
    controller.explosions = []
    event = { clientX: 100, clientY: 200 }
  })

  it("creates an explosion on click", () => {
    controller.explode(event)
    
    expect(controller.explosions).toHaveLength(1)
    expect(controller.explosions[0]).toBeInstanceOf(Explosion)
  })

  it("removes the dead explosions", () =>{
    controller.explode(event)
    
    for (let i = 0; i < 100; i++) {
      controller.tick()
    }

    expect(controller.explosions).toHaveLength(0)
  })
})