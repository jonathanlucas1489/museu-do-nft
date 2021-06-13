import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  }
})

const appId = 'bhbY5ZqpSn8uUTyDechknzSW8ZCpbgGfp4JKYgVf'
const serverUrl = 'https://zqrhewlgfwrn.moralis.io:2053/server'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
