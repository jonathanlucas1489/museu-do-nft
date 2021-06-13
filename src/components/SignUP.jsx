import React, { useState } from 'react';
import {
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/system";
import { useMoralis } from "react-moralis";

const SignUP = () => {
    const { signup } = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = React.useState(false)   
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline" mr="4">Criar Conta</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Cadastre-se</PopoverHeader>
                <PopoverBody>
                    <Input placeholder='Email' m='2' 
                    value={email} 
                    onChange={(event) => {setEmail(event.currentTarget.value)}}/>
                    <Input placeholder='Senha' m='2' value={password} type={show ? "text" : "password"}
                    onChange={(event) => setPassword(event.currentTarget.value)}/>
                    <Button variant="outline" m="2" onClick={() => {signup(email, password, email)}}>Confimar</Button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
export default SignUP