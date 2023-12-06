import { useWallet } from "./Context";

export default function Twitter() {
  const {signer, provider}  = useWallet()
  return <div></div>;
}
