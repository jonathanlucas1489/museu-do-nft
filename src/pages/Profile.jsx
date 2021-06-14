import { Flex, Box } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import { useMoralis } from "react-moralis";
import { Route, Switch } from 'react-router-dom'

function Profile() {  
  const { colorMode, toggleColorMode } = useColorMode()
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis()
  const bg = useColorModeValue("#fff", "#1a202c")
  if (isAuthenticated) {
    return (
      <div>aaaa</div>)
  }
  return (
    <div> eee</div>
  );
}
export default Profile;