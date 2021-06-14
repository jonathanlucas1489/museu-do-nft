import React from 'react';
import {
    Flex,
    Spacer,
    Box,
    Img,
    Switch  
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import logo from '../../assets/images/logoFinalpng.png'
import { useMoralis } from "react-moralis";
import SignUP from './SignUP';
import Login from './Login';
import ConnectWallet from './ConnectWallet';

const Header = () => {
    const { isAuthenticated, isAuthenticating, logout, signup } = useMoralis()
    const { colorMode, toggleColorMode } = useColorMode()
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
                <Switch onChange={toggleColorMode} colorScheme='whiteAlpha' m='2'>
                </Switch>
                <Login />
                <SignUP />
                <ConnectWallet />
            </Box>
        </Flex>
    )
}
export default Header