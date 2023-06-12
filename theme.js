import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Lexend Deca, sans-serif",
        body: "Lexend Deca, sans-serif",
    },
    colors: {
        brand: {
            radialGradient: "radial-gradient(circle, #03000B, #0A0A2C)",
        },
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
    styles: {
        global: {
            body: {
                color: "white",
            },
        }
    }
});

export default theme;