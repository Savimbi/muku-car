export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      // themes: ["light", "dark", "cupcake"],
      theme: {
        extend: {
          // ["light", "dark", "cupcake"],
          backgroundImage: {
            'hero-pattern': "url('public/suv.jpg')",
            'footer-texture': "url('/img/footer-texture.png')",
          }
        },
      },
      plugins: [require("daisyui")],
    }