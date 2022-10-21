import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutSibyl } from "./AboutSibyl"
import { EnterSibyl } from "./EnterSibyl"
import { WagmiTest } from "./WagmiTest"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutSibyl />} />
                <Route path="/enter" element={<EnterSibyl />} />
                <Route path="/test" element={<WagmiTest />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
