module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#705C53", // Para encabezados y elementos destacados
        secondary: "#EDDFE0", // Para fondos secundarios
        accent: "#B7B7B7", // Para textos secundarios o bordes
        background: "#F5F5F7", // Fondo principal
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Fuente limpia y moderna
      },
    },
  },
  plugins: [],
};