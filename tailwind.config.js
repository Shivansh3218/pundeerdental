/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 3-colour system: clinical base + one trustworthy accent + one warm highlight
        cream: {
          DEFAULT: "#F6F2EC", // warm off-white base
          100: "#FBF9F5",
          200: "#EFE9E0",
          300: "#E4DCD0",
        },
        teal: {
          // deep, trustworthy pine-teal accent
          DEFAULT: "#0E3B38",
          600: "#13514C",
          500: "#1C6B64",
          400: "#2E8C83",
          50: "#E7F0EE",
        },
        clay: {
          // single warm highlight
          DEFAULT: "#C2744F",
          400: "#D08A6B",
          200: "#E7C3B1",
        },
        ink: "#15201E", // near-black, slightly warm
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.18)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        marquee: "marquee 38s linear infinite",
        "slow-zoom": "slow-zoom 22s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
