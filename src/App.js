import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import AboutSibyl from "./AboutSibyl"
import EnterSibyl from "./EnterSibyl"
import WagmiTest from "./WagmiTest"

function App() {
    const [accounts, setAccounts] = useState([])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home accounts={accounts} setAccounts={setAccounts} />} />
                <Route path="/about" element={<AboutSibyl />} />
                <Route path="/enter" element={<EnterSibyl />} />
                <Route path="/test" element={<WagmiTest />} />
            </Routes>
        </div>
    )
}

export default App
