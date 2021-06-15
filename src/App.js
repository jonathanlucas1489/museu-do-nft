import Home from './pages/Home'
import Profile from './pages/Profile'
import { Route, Switch } from 'react-router-dom'
import { useMoralis } from "react-moralis";
import { Flex, Box } from '@chakra-ui/react';

function App() {
  const { isAuthenticated, isAuthenticating } = useMoralis()
  return (
    <Flex direction='column'>
      <Box>
        {
          isAuthenticated ? (
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/perfil" exact>
                <Profile />
              </Route>
            </Switch>) : (
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          )
        }
      </Box>
    </Flex>
  )
}
export default App;