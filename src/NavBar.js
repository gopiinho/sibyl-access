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
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left side div */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link textDecoration="none" textColor="white" href="https://discord.com">
                    talk()
                </Link>
                <Link href="https://google.com" textDecoration="none" textColor="white">
                    enter.sibyl()
                </Link>
            </Flex>

            {/* Left side content */}
            <Flex justify="space-between" align="center" width="40%" padding="30px">
                <Box margin="0 15px">source.code()</Box>
                <Spacer />
                <Box margin="0 15px">about.sibyl()</Box>
                <Spacer />
            </Flex>

            {/* Connect Button */}
            {isConnected ? (
                <Box margin="0 15px" textColor="#cbd1d6">
                    .connected
                </Box>
            ) : (
                <Button
                    backgroundColor="#D65170"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={connectAccount}
                >
                    Connect()
                </Button>
            )}
        </Flex>
    )
}

export default NavBar
