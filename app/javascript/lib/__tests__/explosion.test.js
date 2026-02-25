import { describe, it, expect } from "vitest";
import Explosion from "../explosion";
import Particle from "../particle";

describe("Explosion", () => {
  it("creates particles", () => {
    const explosion = new Explosion(50, 50, 10)

    expect(explosion.particles.length).toBe(10)
    expect(explosion.particles[0]).toBeInstanceOf(Particle)
  })

  it("know when is alive", () => {
    const explosion = new Explosion(50, 50, 1, 1)

    expect(explosion.isAlive()).toBe(true)
    
    explosion.update()
    expect(explosion.isAlive()).toBe(false)
  })

  it("updates its life", () => {
    const explosion = new Explosion(50, 50, 1, 2)
    explosion.update()

    expect(explosion.life).toBe(1)

  })
})