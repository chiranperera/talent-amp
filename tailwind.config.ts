import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      mono: ["JetBrains Mono", "Fira Code", "monospace"],
    },
    extend: {
      colors: {
        // TalentAmp Brand Colors
        orange: {
          50: "hsl(var(--color-orange-50))",
          100: "hsl(var(--color-orange-100))",
          200: "hsl(var(--color-orange-200))",
          300: "hsl(var(--color-orange-300))",
          400: "hsl(var(--color-orange-400))",
          500: "hsl(var(--color-orange-500))", // Main brand orange
          600: "hsl(var(--color-orange-600))",
          700: "hsl(var(--color-orange-700))",
          800: "hsl(var(--color-orange-800))",
          900: "hsl(var(--color-orange-900))",
        },
        // Semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--color-orange-500))", // Use orange as primary
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
        // Accent colors for tech elements
        purple: {
          500: "hsl(var(--color-accent-purple))",
        },
        cyan: {
          500: "hsl(var(--color-accent-cyan))",
        },
        lime: {
          500: "hsl(var(--color-accent-lime))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        float: {
          "0%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
          "100%": { transform: "translateY(-15px)" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        slideUp: "slideUp 0.5s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 7s infinite",
      },
      boxShadow: {
        orange: "0 20px 40px -8px rgba(255, 69, 0, 0.3)",
        glow: "0 0 20px rgba(255, 69, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, var(--color-orange-500) 0%, var(--color-orange-400) 100%)",
        "gradient-dark":
          "linear-gradient(135deg, var(--color-gray-900) 0%, var(--color-gray-700) 100%)",
        "gradient-tech":
          "linear-gradient(135deg, var(--color-accent-purple) 0%, var(--color-accent-cyan) 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
