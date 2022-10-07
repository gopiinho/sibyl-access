import { useState } from "react"
import { ethers, BigNumber } from "ethers"
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
                const txResponse = await sibylContract.mint(mintAmount)
                console.log("response :", txResponse)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
}
