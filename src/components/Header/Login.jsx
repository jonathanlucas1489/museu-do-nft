import React, { useState } from 'react';
import {
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useMoralis } from "react-moralis";

const Login = () => {
    const { login } = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = React.useState(false)
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline" mr="4">Login</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Acesse sua conta</PopoverHeader>
                <PopoverBody>
                    <Input placeholder='Email' m='2'
                        value={email}
                        onChange={(event) => setEmail(event.currentTarget.value)} />
                    <Input placeholder='Senha' m='2' 
                        value={password} type={show ? "text" : "password"}
                        onChange={(event) => setPassword(event.currentTarget.value)} />
                    <Button variant="outline" m="2" onClick={() => {
                        login(email, password)}
                    }>Entrar</Button>
                </PopoverBody>
            </PopoverContent>
        </Popover >
    )
}
export default Login