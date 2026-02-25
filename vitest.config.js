import { defineConfig } from "vitest/config"
import { resolve } from "path"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["app/javascript/**/*.test.js"]
  },
  resolve: {
    alias: {
      lib: resolve(__dirname, "app/javascript/lib")
    }
  }
})