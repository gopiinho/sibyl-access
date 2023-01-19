import React from "react"
import { useState } from "react"
import "./App.css"
import NavBar from "./NavBar"
import { Box, Flex, Text } from "@chakra-ui/react"

export function EnterSibyl() {
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
                                cursor: "default",
                            }}
                        >
                            sibyl.member(?)
                        </Text>
                    </Box>
                </Flex>
            </div>
            <div className="moving-background3"></div>
        </div>
    )
}

export default EnterSibyl
