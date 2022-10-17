import React from "react"
import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Link as LinkChakra } from "@chakra-ui/react"
import "./App.css"

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
            <Flex justify="space-around" width="40%" padding="0 15px">
                <div className="router-link">
                    <Link to={"/"}>home()</Link>
                </div>
                <LinkChakra
                    textDecoration="none"
                    textColor="white"
                    href="https://discord.gg/Qf9jmhbfCc"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    talk()
                </LinkChakra>
                <div className="router-link">
                    <Link to={"/enter"}>enter.sibyl()</Link>
                </div>
            </Flex>

            {/* Left side content */}
            <Flex justify="space-between" align="center" width="40%" padding="30px">
                <LinkChakra
                    textDecoration="none"
                    textColor="white"
                    href="https://github.com/igopib/sibyl-access"
                    _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                    source.code()
                </LinkChakra>
                <Spacer />
                <div className="router-link">
                    <Link to={"/about"}>about.sibyl()</Link>
                </div>
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
