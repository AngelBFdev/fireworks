import { describe, expect } from "vitest";
import Particle from "../particle";

describe("Particle", () => {
  it("initialize with correct position", () => {
    const particle = new Particle(10, 20, 0, 5, "red")

    expect(particle.x).toBe(10)
    expect(particle.y).toBe(20)
  })

  it("updates position when updated", () => {
    const particle = new Particle(0, 0, 0, 5, "red")
    particle.update()
    expect(particle.x).toBeGreaterThan(0)
  })
})