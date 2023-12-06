import { useWallet } from "./Context";
export default function ConnectMetamask() {
  const { provider, connectToMetaMask } = useWallet();
  return (
    <>
      <button
        style={{ fontSize: "0.8rem", cursor: "pointer" }}
        onClick={connectToMetaMask}
        disabled={provider !== null}
      >
        {provider ? "MetaMask Connected" : "Connect To MetaMask"}
      </button>
    </>
  );
}
