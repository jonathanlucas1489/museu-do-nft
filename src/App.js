import { Flex, Box, Switch } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import { useMoralis } from "react-moralis";
import Header from './components/Header'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis()
  const bg = useColorModeValue("#fff", "#1a202c")
  if (isAuthenticated) {
    return (
      <Flex direction="column" >
        <Box w="100%" flex='1' bg={bg} boxShadow="xl">
          <Header />
        </Box>
        <Box>
        </Box>
      </Flex>
    )}
  return (
    <Flex direction="column" >
      <Box w="100%" flex='1' bg={bg} boxShadow="xl">
        <Header />
      </Box>
      <Box>
        <Switch onChange={toggleColorMode} colorScheme='whiteAlpha'>
        </Switch>
      </Box>
    </Flex>
  );
}
export default App;