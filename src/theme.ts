import {createSystem, defaultConfig, defineConfig, defineTokens} from "@chakra-ui/react"


const tokens = defineTokens({
    colors: {
        brand: {
            50: { value: "#F0F1FF" },
            100: { value: "#D9DBFE" },
            200: { value: "#BFC3FD" },
            300: { value: "#A5A9FC" },
            400: { value: "#8B8FFB" },
            500: { value: "#808DFB" },
            600: { value: "#6D77E3" },
            700: { value: "#5A63CB" },
            800: { value: "#484FB3" },
            900: { value: "#363995" },
        },
        background: {
            light: { value: "#FFFFFF" },
            dark: { value: "#121212" },
        },
        surface: {
            light: { value: "#F9F9F9" },
            dark: { value: "#1E1E1E" },
        },
        text: {
            light: { value: "#1C1B1F" },
            dark: { value: "#E6E1E5" },
        },
    },
    radii: {
        sm: { value: "8px" },
        md: { value: "12px" },
        lg: { value: "16px" },
    },
    typography: {
        fonts: {
            heading: { value: "'Inter', sans-serif" },
            body: { value: "'Roboto', sans-serif" },
            mono: { value: "'Fira Code', monospace" },
        },
        fontSizes: {
            xs: { value: "12px" },
            sm: { value: "14px" },
            md: { value: "16px" },
            lg: { value: "20px" },
            xl: { value: "24px" },
            "2xl": { value: "30px" },
            "3xl": { value: "36px" },
        },
        fontWeights: {
            light: { value: 300 },
            normal: { value: 400 },
            medium: { value: 500 },
            bold: { value: 700 },
        },
        lineHeights: {
            normal: { value: "1.5" },
            heading: { value: "1.2" },
        },
    },
})

// Set App Theme
const config = defineConfig({
    theme: {
        tokens,
        semanticTokens: {
            colors: {
                bg: {
                    value: { base: "{colors.background.light}", _dark: "{colors.background.dark}" },
                },
                text: {
                    value: { base: "{colors.text.light}", _dark: "{colors.text.dark}" },
                },
                primary: {
                    value: { base: "{colors.brand.500}", _dark: "{colors.brand.300}" },
                },
            },
        },
    },
})

export default createSystem(defaultConfig, config)

