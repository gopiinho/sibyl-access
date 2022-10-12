import React from "react"
import { useState } from "react"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import "./App.css"
import NavBar from "./NavBar"

function AboutSibyl() {
    const [accounts, setAccounts] = useState([])

    return (
        <div className="overlay">
            <div className="App">
                <NavBar accounts={accounts} setAccounts={setAccounts} />
                <Flex height="100vh" justify="space-around" width="40%" paddingLeft="175px">
                    <Text fontSize="38px" textShadow="0 5px rgba(255, 0, 0, 1)" paddingBottom="50">
                        about.sibyl()
                    </Text>
                </Flex>
            </div>
            <div className="moving-background2"></div>
        </div>
    )
}

export default AboutSibyl
