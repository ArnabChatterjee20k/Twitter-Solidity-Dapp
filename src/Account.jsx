import { useWallet } from "./Context";

export default function Account() {
  const { signerAddress } = useWallet();

  return <div style={{marginBlock:"1rem"}}>{signerAddress ? signerAddress : "No Account"}</div>;
}
