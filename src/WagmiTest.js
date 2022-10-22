import React from "react"
import { useState } from "react"
import { chain, useAccount, useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

export function WagmiTest() {
    const connector = new MetaMaskConnector({
        chains: [chain.mainnet, chain.optimism],
    })

    return (
        <div>
            {isConnected && <div>Connected to {activeConnector.name}</div>}

            {connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {isLoading && pendingConnector?.id === connector.id && " (connecting)"}
                </button>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    )
}

export default WagmiTest
