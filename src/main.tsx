import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"

// Chakra UI (System)
import { BrowserRouter } from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react";
import theme from "@/theme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider value={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
)
