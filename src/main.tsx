import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { system } from "./theme"

import "./index.css"
import App from "./App.tsx"

// Chakra UI (System)
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider value={system._config.theme} colorMode="light">
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
