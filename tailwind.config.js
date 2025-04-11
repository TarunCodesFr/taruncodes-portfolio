  /** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
            laptop: { max: "1600px" }, // Custom laptop breakpoint
          },
      },
    },
    plugins: [],
  };
  