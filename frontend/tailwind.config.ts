import type { Config } from "tailwindcss"
import scrollbar from "tailwind-scrollbar"

const config: Config = {
  content: ["./index.html", "./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbar],
}

export default config;