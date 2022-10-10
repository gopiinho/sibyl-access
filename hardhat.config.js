require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

const GEORLI_RPC_URL = process.env.GEORLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API = process.env.ETHERSCAN_API

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        georli: {
            url: process.env.GEORLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },

    etherscan: {
        apiKey: process.env.ETHERSCAN_API,
    },
}
