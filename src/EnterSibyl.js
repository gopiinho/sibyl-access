import React from "react"
import { useState } from "react"
import "./App.css"
import NavBar from "./NavBar"

export function EnterSibyl() {
    const [accounts, setAccounts] = useState([])

    return (
        <div className="overlay">
            <div className="App2">
                <NavBar accounts={accounts} setAccounts={setAccounts} />
            </div>
            <div className="moving-background3"></div>
        </div>
    )
}

export default EnterSibyl
