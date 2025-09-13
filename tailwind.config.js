/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'primary-green': '#4CAF50',
        'dark-blue': '#1A237E',
        'light-green': '#A5D6A7',
        'light-beige': '#F5F5DC',
        white: '#FFFFFF',
        gray: { DEFAULT: '#757575' },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },

        // Optional semantic colors
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        info: '#2196F3',
      },
      fontSize: {
        display: ['48px', { lineHeight: '1.2' }],
        headline: ['32px', { lineHeight: '1.3' }],
        base: ['16px', { lineHeight: '1.6' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        soft: '0 4px 8px rgba(0,0,0,0.1)',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.025em',
        wide: '0.05em',
      },
      lineHeight: {
        tight: 1.1,
        relaxed: 1.8,
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
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "slide-in": { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(0)" } },
        "float": { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        "gradient-shift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
        "pulse-slow": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.5" } },
        "pulse-bg": { "0%, 100%": { backgroundColor: "rgba(0, 123, 255, 0.05)" }, "50%": { backgroundColor: "rgba(0, 123, 255, 0.15)" } },
        "spin-slow": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "spin-slower": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "spin-slowest": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "progress": { "0%": { width: "0%" }, "100%": { width: "100%" } },
        "image-float": { "0%,100%": { transform: 'translateY(0px) rotate(0deg)' }, "50%": { transform: 'translateY(-5px) rotate(1deg)' } },
        "rotate-3d": { "0%,100%": { transform: 'perspective(1000px) rotateY(0deg)' }, "50%": { transform: 'perspective(1000px) rotateY(15deg)' } },
        "float-0": { "0%,100%": { transform: 'translateY(0px) translateX(0px)' }, "50%": { transform: 'translateY(-10px) translateX(5px)' } },
        "float-1": { "0%,100%": { transform: 'translateY(0px) translateX(0px)' }, "50%": { transform: 'translateY(-8px) translateX(-3px)' } },
        "float-2": { "0%,100%": { transform: 'translateY(0px) translateX(0px)' }, "50%": { transform: 'translateY(-12px) translateX(2px)' } },

        // New optional entrance/exit animations
        "slide-down-fade": { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        "slide-up-fade": { from: { opacity: 0, transform: 'translateY(10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "pulse-bg": "pulse-bg 2s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-slower": "spin-slower 12s linear infinite",
        "spin-slowest": "spin-slowest 16s linear infinite",
        "progress": "progress 5s linear forwards",
        "image-float": "image-float 6s ease-in-out infinite",
        "rotate-3d": "rotate-3d 8s ease-in-out infinite",
        "float-0": "float-0 3s ease-in-out infinite",
        "float-1": "float-1 3s ease-in-out infinite",
        "float-2": "float-2 3s ease-in-out infinite",

        // New optional animations
        "slide-down-fade": "slide-down-fade 0.3s ease-out",
        "slide-up-fade": "slide-up-fade 0.3s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))', // new conic gradient
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),       // optional forms plugin
    require("@tailwindcss/typography"),  // optional typography plugin
    require("@tailwindcss/aspect-ratio") // optional aspect ratio plugin
  ],
};
