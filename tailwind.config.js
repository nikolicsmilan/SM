module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "blue",
          },
          fontFamily: {
            sans: "ui-monospace",
          },
          fontSize: {
            xs: "0.563rem",
            sm: "0.75rem",
            base: "1rem",
            xl: "1.333rem",
            "2xl": "1.777rem",
            "3xl": "2.369rem",
            "4xl": "3.157rem",
            "5xl": "4.209rem",
          },
        },
      },
      themes: [
        {
          name: "citrom",
          extend: {
            colors: {
              primary: "rgb(253, 224, 71)",
              secondary: "rgb(153, 207, 92)",
              success: "rgb(63, 178, 121)",
              info: "rgb(253, 240, 202)",
              dark: "rgb(0, 0, 0)",
            },
            fontFamily: {
              sans: "Arial",
            },
            fontSize: {
              xs: "0.563rem",
              sm: "0.75rem",
              base: "1rem",
              xl: "1.333rem",
              "2xl": "1.777rem",
              "3xl": "2.369rem",
              "4xl": "3.157rem",
              "5xl": "4.209rem",
            },
            backgroundImage: {
              'gradient-to-r': 'linear-gradient(to right, #f7fafc, #edf2f7)',
            },
          },
        },
        {
          name: "narancs",
          extend: {
            colors: {
              primary: "rgb(244, 160, 27)", //narancs #F4A01B 'rgb(244, 160, 27)' linear-gradient(to right,#fde047, #000000)
             secondary: "rgb(250, 250, 250)", //#FAFAFA>> háttér1
            // secondary: "rgb(76, 70, 55)",
             success: "rgb(237, 237, 237)", //#EDEDED >> hátttér2
           // success: "rgb(111, 101, 67)", //#EDEDED >> hátttér2
              info: "rgb(191, 191, 191)", //#BFBFBF >> szöveg
              dark: "rgb(0, 0, 0)",
              'gradient': 'linear-gradient(130deg, #EB8814 23.41%, #1A1918 88.02%)',
            },            
            fontFamily: {
              sans: "Inter",
              montserrat: "montserrat",
            },
            backgroundImage: {
              'gradient': 'linear-gradient(130deg, #EB8814 23.41%, #1A1918 88.02%)',
              'gradient2': 'linear-gradient(130deg, #EB8814, black 95%, #000000)',
              'gradient3': 'linear-gradient(130deg, #EB8814 15.41%, #1A1918 78.02%)'
            },
            gradientColorStops: {
              'primary': '#3490dc',
              'secondary': '#ffed4a',
            }
          },
        },
        {
          name: "kiwi",
          extend: {
            colors: {
              primary: "rgb(253, 224, 71)",
              secondary: "rgb(76, 70, 55)",//jo barna #4C4637 társa #6F6543
              success: "rgb(0, 229, 205)",
              info: "rgb(177, 171, 153)",
              dark: "rgb(0, 0, 0)",
            },
            fontFamily: {
              sans: "Comforter Brush",
            },
          },
        },
        {
          name: "dio",
          extend: {
            colors: {
              primary: "rgb(253, 224, 71)",
              secondary: "rgb(76, 70, 55)",
              success: "rgb(111, 101, 67)", //#EDEDED >> hátttér2
              info: "rgb(177, 171, 153)",
              dark: "rgb(0, 0, 0)",
            },
            fontFamily: {
              sans: "Arial",
            },
            backgroundImage: {
              'gradient': 'linear-gradient(130deg, rgb(253, 224, 71) 23.41%, #1A1918 88.02%)',
              'gradient2': 'linear-gradient(130deg, #EB8814, black 95%, #000000)',
              'gradient3': 'linear-gradient(130deg, #EB8814 15.41%, #1A1918 78.02%)',
              'gradient4':'linear-gradient(90deg,#6F6543 0.41%,rgb(76, 70, 55)   15.02%)'
            },
          },
        },
        {
          name: "sajat",
          extend: {
            colors: {
              primary: "rgb(244, 160, 27)", //narancs #F4A01B
              secondary: "rgb(250, 250, 250)", //#FAFAFA>> háttér1
              success: "rgb(237, 237, 237)", //#EDEDED >> hátttér2
              info: "rgb(191, 191, 191)", //#BFBFBF >> szöveg
              dark: "rgb(0, 0, 0)",
            },
            fontFamily: {
              sans: "Arial",
            },
            fontSize: {
              xs: "0.563rem",
              sm: "0.75rem",
              base: "1rem",
              xl: "1.333rem",
              "2xl": "1.777rem",
              "3xl": "2.369rem",
              "4xl": "3.157rem",
              "5xl": "4.209rem",
            },
            backgroundImage: {
              'gradient': 'linear-gradient(130deg, #EB8814 23.41%, #1A1918 88.02%)',
              'gradient2': 'linear-gradient(130deg, #EB8814, black 95%, #000000)',
              'gradient3': 'linear-gradient(130deg, #EB8814 15.41%, #1A1918 78.02%)'
            },
          },
        },
      ],
    }),
  ],
};
