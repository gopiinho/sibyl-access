import React from "react"
import { useState } from "react"
import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import "./App.css"
import NavBar from "./NavBar"

export function AboutSibyl() {
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
                            _hover={{
                                color: "rgba(214, 81, 112, 0.75)",
                                textShadow: "0 5px rgba(255, 255, 255, 0.55)",
                            }}
                        >
                            about.sibyl()
                        </Text>

                        <Text
                            fontSize="18px"
                            color="rgba(225,225,225,0.95)"
                            letterSpacing="-5.5%"
                            fontFamily="'DotGothic16', sans-serif"
                            textShadow="0 2px 2px #000000"
                            paddingBottom="0px"
                        >
                            The Sibyl System is a system that manages and monitors the current
                            status of every citizen in Japan and sees if there is a high chance of
                            them committing a crime.
                            <Spacer /> Ostensibly, the Sybyl system is a fully computerized network
                            maintained by the Japanese Government, which manages the Psycho-Passes
                            of the entire Japanese population via several linked servers.
                        </Text>

                        <Text
                            fontSize="18px"
                            color="rgba(225,225,225,1   )"
                            letterSpacing="-5.5%"
                            fontFamily="'DotGothic16', sans-serif"
                            textShadow="0 2px 2px #000000"
                        >
                            In reality, however, the Sybyl System is more than merely a computer.
                            The Sybyl System is actually a massive biocomputer run by a secret
                            organization of individuals. The members of Sybyl are chosen based on
                            their desirability by the active members, and always have the ability to
                            prevent their psycho-passes from being properly determined (a condition
                            called Criminally Asymptomatic in-universe).
                        </Text>
                    </Box>
                </Flex>
                <Flex justify="left" align="center" paddingLeft="130px">
                    <Text
                        fontSize="18px"
                        color="rgba(225,225,225,1   )"
                        letterSpacing="-5.5%"
                        fontFamily="'DotGothic16', sans-serif"
                        textShadow="0 2px 2px #000000"
                        paddingBottom="20px"
                    >
                        {" "}
                        Being a member of the Sibyl System is no easy task as the Officials will
                        decide who is eligible to join, and will force people they approve as
                        members to comply. Once a member is chosen, they go under an operation in
                        which their brain is removed from their body and the brain is the matched to
                        a computer and implanted into the system.
                    </Text>
                </Flex>
            </div>
            <div className="moving-background2"></div>
        </div>
    )
}

export default AboutSibyl
