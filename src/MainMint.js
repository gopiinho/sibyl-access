import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import SibylAccess from "./SibylAccess.json"

const sibylAccessAddress = ""

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])

    async function mintHandler() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()

            const sibylContract = new ethers.Contract(sibylAccessAddress, SibylAccess.abi, signer)

            try {
                const txResponse = await sibylContract.mint(BigNumber.from(mintAmount))
                console.log("response :", txResponse)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    return (
        <div>
            <h1>Sibyl Access</h1>
            <p> The Sibyl system sees it all. Become a part of it!</p>
            {isConnected ? (
                <div>
                    <button onClick={mintHandler}>Get Access</button>
                </div>
            ) : (
                <p>Connect to Sibyl System.</p>
            )}
        </div>
    )
}

export default MainMint
