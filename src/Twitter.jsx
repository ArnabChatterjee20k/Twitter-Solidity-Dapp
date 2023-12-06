import { useRef } from "react";
import { useWallet } from "./Context";

export default function Twitter() {
  const { contract, signerAddress } = useWallet();
  return (
    <div style={{ marginTop: "1rem" }}>
      <Field />
    </div>
  );
}
function Field() {
  const tweet = useRef("");
  const { contract, signerAddress } = useWallet();
  async function createTweet() {
    await contract.createTweet(tweet.current);
  }
  return (
    <div>
      <textarea
        onChange={(e) => {
          tweet.current = e.target.value;
        }}
        style={{
          padding: "1rem",
          marginBlock: "1rem",
          display: "block",
          margin: "auto",
        }}
        placeholder="write your tweet..."
        rows={10}
        cols={80}
      ></textarea>
      <button onClick={createTweet}>CreateTweet</button>
    </div>
  );
}
