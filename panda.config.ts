import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx,astro}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#fd9a0e" },
          secondary: { value: "#ff4c4c" },
          ink: { value: "#2a1b10" },
          muted: { value: "#6e6258" },
          panel: { value: "rgba(255, 250, 245, 0.88)" },
          line: { value: "rgba(42, 27, 16, 0.08)" },
          pageStart: { value: "#fff8f0" },
          pageEnd: { value: "#fffdf9" }
        },
        shadows: {
          soft: { value: "0 24px 60px rgba(104, 52, 12, 0.08)" }
        },
        radii: {
          panel: { value: "28px" },
          card: { value: "22px" }
        }
      }
    }
  }
});
