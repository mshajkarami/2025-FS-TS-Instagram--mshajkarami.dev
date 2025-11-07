import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { system } from "./theme"

import './index.css'
import App from './App.tsx'

// chakra Ui
import {Provider} from "@/components/ui/provider"
import {BrowserRouter} from "react-router-dom";
import {EnvironmentProvider, LocaleProvider} from "@chakra-ui/react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider>
                <App/>
            </Provider >
        </BrowserRouter>
    </StrictMode>,
)
