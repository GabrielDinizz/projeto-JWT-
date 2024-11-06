module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adicione esse caminho para incluir todos os arquivos .js, .ts, .jsx e .tsx na pasta src
  ],
  theme: {
    extend: {
      colors: {
        'purple-gradient': '#92A3FD',
        'cyan-blue': '#9DCEFF',
      },
      backgroundImage: {
        'gradient-standard': 'linear-gradient(to right, #92A3FD, #9DCEFF)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }

    },
  },
  plugins: [],
};
