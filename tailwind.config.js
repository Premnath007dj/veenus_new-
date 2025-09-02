/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        // Brand Colors - Based on Logo
        primary: {
          50: '#fefcf8',
          100: '#faf7f2',
          200: '#f5f1e8',
          300: '#e6c79a',
          400: '#d4a574',
          500: '#b8945f',
          600: '#a8906b',
          700: '#8b7355',
          800: '#6b5b3f',
          900: '#5d4c3a',
          950: '#2d1b0e',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#10b981',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
        error: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        info: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        // Neutral Colors
        background: '#fefcf8',
        foreground: '#2d1b0e',
        surface: '#faf7f2',
        'surface-light': '#f5f1e8',
        border: '#e6c79a',
        input: '#ffffff',
        ring: '#10b981',
        popover: '#ffffff',
        'popover-foreground': '#2d1b0e',
        card: '#ffffff',
        'card-foreground': '#2d1b0e',
        muted: '#f5f1e8',
        'muted-foreground': '#8b7355',
        secondary: '#8b7355',
        'secondary-foreground': '#ffffff',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'elevation': '0 4px 6px -1px rgba(45, 27, 14, 0.1), 0 2px 4px -1px rgba(45, 27, 14, 0.06)',
        'elevation-hover': '0 10px 15px -3px rgba(45, 27, 14, 0.1), 0 4px 6px -2px rgba(45, 27, 14, 0.05)',
        'glass': '0 8px 32px 0 rgba(45, 27, 14, 0.37)',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #d4a574 0%, #10b981 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #e6c79a 0%, #34d399 100%)',
        'gradient-surface': 'linear-gradient(135deg, #faf7f2 0%, #f5f1e8 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}