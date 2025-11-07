import { createSystem, defineConfig, defineTokens } from "@chakra-ui/react"

const tokens = defineTokens({
    colors: {
        brand: {
            50: { value: "#F3E8FF" },
            100: { value: "#E0C3FC" },
            200: { value: "#CBA0F8" },
            300: { value: "#B07AF3" },
            400: { value: "#9A55EE" },
            500: { value: "#7F39FB" }, // primary
            600: { value: "#6B29E3" },
            700: { value: "#5818CA" },
            800: { value: "#4510B2" },
            900: { value: "#320999" },
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

export const system = createSystem(config)
