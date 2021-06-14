import Home from './pages/Home'
import Profile from './pages/Profile'
import { Route, Switch } from 'react-router-dom'
import { useMoralis } from "react-moralis";
import { Container } from '@chakra-ui/react';

function App() {
  const { isAuthenticated, isAuthenticating } = useMoralis()
  return (
    <Container>
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
        <div> cuu</div>
        )
      }

    </Container>
  )
}
export default App;