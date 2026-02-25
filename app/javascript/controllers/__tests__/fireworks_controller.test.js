import { describe, it, expect, vi } from "vitest"
import FireworksController from "../fireworks_controller"
import Explosion from "lib/explosion"

describe("FireworksController", () => {
  it("creates an explosion on click", () => {
    const controller = new FireworksController()

    controller.explosions = []

    const event = { clientX: 100, clientY: 200 }
    controller.explode(event)
    
    expect(controller.explosions.length).toBe(1)
    expect(controller.explosions[0]).toBeInstanceOf(Explosion)
  })
})