import React from "react"
import { useState } from "react"
import "./App.css"
import NavBar from "./NavBar"
import { useNetwork, useSwitchNetwork } from "wagmi"

export function EnterSibyl() {
    const [accounts, setAccounts] = useState([])
    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } =
      useSwitchNetwork()

    return (
        <div>
      {chain && <div>Connected to {chain.name}</div>}

      {chains.map((x) => (
        <button
          disabled={!switchNetwork || x.id === chain?.id}
          key={x.id}
          onClick={() => switchNetwork?.(x.id)}
        >
          {x.name}
          {isLoading && pendingChainId === x.id && ' (switching)'}
        </button>
      ))}

      <div>{error && error.message}</div>
    </div>

        <div className="overlay">
            <div className="App2">
                <NavBar accounts={accounts} setAccounts={setAccounts} />
            </div>
            <div className="moving-background3"></div>
        </div>
    )
}

export default EnterSibyl
