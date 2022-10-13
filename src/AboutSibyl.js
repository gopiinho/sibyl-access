import React from "react"
import { useState } from "react"
import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import "./App.css"
import NavBar from "./NavBar"

function AboutSibyl() {
    const [accounts, setAccounts] = useState([])

    return (
        <div className="overlay">
            <div className="App2">
                <NavBar accounts={accounts} setAccounts={setAccounts} />
                <Flex justify="left" align="center" paddingLeft="130px">
                    <Box width="50%">
                        <Text
                            fontSize="38px"
                            textShadow="0 5px rgba(255, 0, 0, 0.75)"
                            paddingBottom="10px "
                            _hover={{ color: "rgba(255, 255, 255, 0.5)" }}
                        >
                            about.sibyl()
                        </Text>

                        <Text
                            fontSize="18px"
                            color="rgba(225,225,225,1   )"
                            letterSpacing="-5.5%"
                            fontFamily="'DotGothic16', sans-serif"
                            textShadow="0 2px 2px #000000"
                            paddingBottom="50px"
                        >
                            The Sibyl System is a system that manages and monitors the current
                            status of every citizen in Japan and sees if there is a high chance of
                            them committing a crime.
                            <Spacer /> Ostensibly, the Sybyl system is a fully computerized network
                            maintained by the Japanese Government, which manages the Psycho-Passes
                            of the entire Japanese population via several linked servers.
                        </Text>
                    </Box>
                </Flex>
            </div>
            <div className="moving-background2"></div>
        </div>
    )
}

export default AboutSibyl
