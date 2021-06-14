import React, { useState } from 'react';
import {
    Tooltip
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useMoralis } from "react-moralis";

const Login = () => {
    const { authenticate, isAuthenticating } = useMoralis()
    return (
        <Tooltip label="Requer carteira do metamask!" aria-label="A tooltip" borderRadius='9px'>
            <Button mr="4"
                isLoading={isAuthenticating} loadingText="CONECTANDO"
                variant="outline" onClick={() => { authenticate() }}>
                Conectar Carteira
            </Button>
        </Tooltip>
    )
}
export default Login