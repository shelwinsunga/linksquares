import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            radialGradient: "radial-gradient(circle, #03000B, #0A0A2C)",
        },
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