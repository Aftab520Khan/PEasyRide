import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {Provider} from "react-redux";
import store from "./components/Store/store";
import {Auth0Provider} from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-rtcyugjqe470fpbx.us.auth0.com"
    clientId="m28TGgu1rbMk8j8OvZS4TPa40dulGEou"
    redirecturi={window.location.origin}
    >
    <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
 
  
);
