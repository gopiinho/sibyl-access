import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import AboutSibyl from "./AboutSibyl"

function App() {
    const [accounts, setAccounts] = useState([])

    return (
        /* <div> ************    This does not work *****************************   
            <h1> Test </h1> 
             <Routes>
                <Route path="/" element={<Home accounts={accounts} setAccounts={setAccounts} />} />
                <Route path="/about" element={<AboutSibyl />} /> 
            </Routes> 
        </div>************    This does not work ***************** */
        <Home accounts={accounts} setAccounts={setAccounts} />
    )
}

export default App
