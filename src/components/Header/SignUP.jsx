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
    useToast
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import { useMoralis } from "react-moralis";

const SignUP = () => {
    const { signup } = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConf, setPasswordConf] = useState()
    const [show, setShow] = React.useState(false)
    const toast = useToast()   
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
                    <Input placeholder='Confirmar Senha' m='2' value={passwordConf} type={show ? "text" : "password"}
                    onChange={(event) => setPasswordConf(event.currentTarget.value)}/>
                    <Button variant="outline" m="2" onClick={() => {
                        if(password === passwordConf) {
                            signup(email, password, email)
                        } else {
                            toast({
                                description: "As senhas devem coincidir",
                                status: 'error'
                            })
                        }
                        }}>Confimar</Button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
export default SignUP