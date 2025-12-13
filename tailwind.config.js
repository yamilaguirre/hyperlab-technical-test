import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "#FF0061",
                    hover: "#D90052",
                },
                dark: {
                    bg: "#141414",
                    card: "#1E1E1E",
                    input: "#2C2C2C",
                },
                text: {
                    main: "#FFFFFF",
                    muted: "#A1A1A1",
                },
            },
            screens: {
                xs: "475px",
            },
        },
    },

    plugins: [forms],
};
