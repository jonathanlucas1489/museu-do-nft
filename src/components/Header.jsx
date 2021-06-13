import React from 'react';
import {
    Flex,
    Spacer,
    Box,
    Img
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/system";
import logo from '../assets/images/logoFinalpng.png'
import { useMoralis } from "react-moralis";
import SignUP from './SignUP';

const Header = () => {
    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("white", "gray.800")
    const { authenticate, isAuthenticated, isAuthenticating, logout, authError, signup } = useMoralis()
    if (isAuthenticated) {
        return (
            <Flex align='center'>
                <Box p="2">
                    <Img objectFit="cover"
                        boxSize="60px" src={logo} />
                </Box>
                <Spacer />
                <Box>
                    <Button variant="outline" mr="4">
                        Cadastre=se
                    </Button>
                    <Button colorScheme="teal"
                        isLoading={isAuthenticating}
                        loadingText="CONECTANDO"
                        onClick={() => { logout() }}
                    >Desconectar</Button>
                </Box>
            </Flex>
        )
    }
    return (
        <Flex align='center'>
            <Box>
                <Img objectFit="cover"
                    boxSize="60px" src={logo} m="2" ml="25" />
            </Box>
            <Spacer />
            <Box>
                <SignUP />
                <Button mr="4"
                    isLoading={isAuthenticating} loadingText="CONECTANDO"
                    variant="outline" onClick={() => { authenticate() }}>
                    Conectar Carteira
                </Button>
            </Box>
        </Flex>
    )
}
export default Header