import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import SibylAccess from "./SibylAccess.json"

const sibylAccessAddress = "0xdD93800B8e743Ccb7925F776992CB9541801CA0D"

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])

    async function mintHandler() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()

            const sibylContract = new ethers.Contract(sibylAccessAddress, SibylAccess.abi, signer)

            try {
                const txResponse = await sibylContract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.05).toString()),
                })
                console.log("response :", txResponse)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="60%">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000" paddingBottom="50">
                        SIBYL.ACCESS
                    </Text>
                    <Text
                        fontSize="16px"
                        color="rgba(225,225,225,0.9)"
                        letterSpacing="-5.5%"
                        fontFamily="Press Start 2P"
                        textShadoq="0 2px 2px #000000"
                        paddingBottom="70px"
                    >
                        The Sibyl system sees it all, only seeks the unexampled minds. Become a part
                        of the hive mind and oversee the human desires.
                    </Text>
                </div>

                {isConnected ? (
                    <div>
                        <Button
                            backgroundColor="rgba(214, 81, 112, 0.75)"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="10px"
                            onClick={mintHandler}
                            _hover={{
                                backgroundColor: "rgba(214, 81, 112, 0.45)",
                            }}
                        >
                            join.sibyl()
                        </Button>
                    </div>
                ) : (
                    <Text
                        marginTop="70px"
                        fontSize="15px"
                        letterSpacing="-5.5%"
                        fontFamily=""
                        textShadow="0 3px #000000"
                        color="rgba(214, 81, 112, 0.75)"
                        _hover={{
                            color: "rgba(214, 81, 112, 0.55)",
                        }}
                    >
                        &lt;runtime error: establish connection to sibyl&gt;
                    </Text>
                )}
            </Box>
        </Flex>
    )
}

export default MainMint
