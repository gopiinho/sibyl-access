import React from "react"
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react"

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }

    return (
        <div>
            {/* Left side div */}
            <div>Discord</div>
            <div>Another</div>

            {/* Left side content */}
            <div>Mint</div>
            <div>About</div>

            {/* Connect Button */}
            {isConnected ? <p>Connected</p> : <button onClick={connectAccount}>Connect</button>}
        </div>
    )
}

export default NavBar
