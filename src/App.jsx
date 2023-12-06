import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Twitter from "./Twitter";
import ContextProvider from "./Context";
import ConnectMetamask from "./ConnectMetamask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider>
      <h1>Twitter Dapp</h1>
      <ConnectMetamask/>
      <Twitter />
    </ContextProvider>
  );
}

export default App;
