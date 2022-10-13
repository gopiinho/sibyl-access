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
                <Link
                    textDecoration="none"
                    textColor="white"
                    href="https://discord.com"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    talk()
                </Link>
                <Link
                    href="https://google.com"
                    textDecoration="none"
                    textColor="white"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    enter.sibyl()
                </Link>
            </Flex>

            {/* Left side content */}
            <Flex justify="space-between" align="center" width="40%" padding="30px">
                <Link
                    textDecoration="none"
                    textColor="white"
                    href="https://github.com/igopib/sibyl-access"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    source.code()
                </Link>
                <Spacer />
                <Link
                    textDecoration="none"
                    textColor="white"
                    href="/about"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    about.sibyl()
                </Link>
                <Spacer />
            </Flex>

            {/* Connect Button */}
            {isConnected ? (
                <Box margin="0 15px" textColor="#cbd1d6">
                    .connected
                </Box>
            ) : (
                <Button
                    backgroundColor="rgba(214, 81, 112, 0.75)"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={connectAccount}
                    _hover={{
                        backgroundColor: "rgba(214, 81, 112, 0.45)",
                    }}
                >
                    connect()
                </Button>
            )}
        </Flex>
    )
}

export default NavBar
