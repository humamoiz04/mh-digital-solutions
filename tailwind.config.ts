import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom blob colors from previous requests
        "blob-orange": "#FF7043",
        "blob-purple": "#AB47BC",
        "blob-green": "#AEEA00",
        "blob-blue": "#42A5F5",
        "blob-pink": "#E91E63",
        "blob-teal": "#00BFA5",
        "blob-yellow": "#FFCA28",
        "blob-b8eac7": "#b8eac7", // Added from previous request

        // Dashboard specific gradient colors (more pastel)
        "dashboard-pastel-start-1": "#b8eac7", // Light green
        "dashboard-pastel-end-1": "#8ac4f2", // Light blue
        "dashboard-pastel-start-2": "#fbcfe8", // Light pink
        "dashboard-pastel-end-2": "#c7a3ed", // Light purple
        "dashboard-pastel-start-3": "#a7f3d0", // Lighter green
        "dashboard-pastel-end-3": "#bfdbfe", // Lighter blue
        "dashboard-pastel-start-4": "#fde68a", // Light yellow
        "dashboard-pastel-end-4": "#fecaca", // Light red/pink

        // Additional gradient colors for more services (more pastel)
        "progress-gradient-1-start": "#a7f3d0", // Light green
        "progress-gradient-1-end": "#6ee7b7", // Medium green
        "progress-gradient-2-start": "#bfdbfe", // Light blue
        "progress-gradient-2-end": "#93c5fd", // Medium blue
        "progress-gradient-3-start": "#fbcfe8", // Light pink
        "progress-gradient-3-end": "#f472b6", // Medium pink
        "progress-gradient-4-start": "#d8b4fe", // Light purple
        "progress-gradient-4-end": "#a78bfa", // Medium purple
        "progress-gradient-5-start": "#fde68a", // Light yellow
        "progress-gradient-5-end": "#fcd34d", // Medium yellow
        "progress-gradient-6-start": "#a7f3d0", // Another light green
        "progress-gradient-6-end": "#bfdbfe", // Another light blue
        "progress-gradient-7-start": "#fbcfe8", // Another light pink
        "progress-gradient-7-end": "#d8b4fe", // Another light purple

        // Dark pastel colors for icons
        "dark-pastel-blue": "#6a8eaf",
        "dark-pastel-green": "#7aa87a",
        "dark-pastel-purple": "#8e7b9e",
        "dark-pastel-red": "#a87a7a",
        "dark-pastel-yellow": "#a8a87a",
        "dark-pastel-teal": "#7aa8a8",
        "dark-pastel-orange": "#a88e7a",
        "dark-pastel-pink": "#a87a8e",
        "dark-pastel-indigo": "#7a7aa8",
        "dark-pastel-lime": "#8ea87a",
        "dark-pastel-cyan": "#7aa88e",
        "dark-pastel-fuchsia": "#a87aa8",

        // New colors as requested by the user
        "new-mint-green": "#67f5d1",
        "new-light-coral": "#f1a09e",
        "new-vibrant-pink": "#ff6d92",
        "new-light-peach": "#ffcfc2",
        "new-deep-purple": "#240019",
        "new-soft-green": "#b1f5ac",

        // Color for transparent background to facilitate glass morphism effect
        // Apply this color (e.g., bg-glass-light-bg) along with a backdrop-filter class
        // (like backdrop-blur-md) to achieve the glass morphism look on elements.
        "glass-light-bg": "rgba(255, 255, 255, 0.2)", // Semi-transparent white
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px) translateX(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) translateX(10px) rotate(5deg)" },
          "50%": { transform: "translateY(0px) translateX(0px) rotate(0deg)" },
          "75%": { transform: "translateY(10px) translateX(-10px) rotate(-5deg)" },
          "100%": { transform: "translateY(0px) translateX(0px) rotate(0deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        float: "float var(--animation-duration) ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
