const { ethers } = require("hardhat")

async function main() {
    const SibylAccessFactory = await ethers.getContractFactory("SibylAccess")
    console.log("Deploying Contract ...")

    const sibylAccess = await SibylAccessFactory.deploy()

    await sibylAccess.deployed()

    console.log("Sibyl Access deployed to: ", sibylAccess.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
