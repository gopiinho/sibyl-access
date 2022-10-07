import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import { SibylAccess } from "./SibylAccess.json"

const sibylAccessAddress = ""

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])
}
