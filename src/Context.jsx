import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
const Context = createContext();
export const useWallet = () => useContext(Context);

const walletABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "NewUserRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TweetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "liker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "likedAuthor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tweetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLikedCount",
        type: "uint256",
      },
    ],
    name: "TweetLiked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "newTweetLength",
        type: "uint16",
      },
    ],
    name: "changeTweetLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tweet",
        type: "string",
      },
    ],
    name: "createTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getAllTweets",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
        ],
        internalType: "struct Tweeter.Tweet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
    ],
    name: "getTweet",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
        ],
        internalType: "struct Tweeter.Tweet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "likeTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "registeredUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tweets",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "unlikeTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const walletAddress = "0x52cce8d3Aabc392b6389Ab1bF69AcD66ca709f10";

export default function ContextProvider({ children }) {
  const [provider, setProvider] = useState(() => {
    if (window.ethereum && window.ethereum.isConnected())
      return new ethers.BrowserProvider(window.ethereum);
  });
  const [signer, setSigner] = useState(null);

  /**
   * when metamask is present in the browser or other wallet
   * we can detect using window.ethereum
   * if we wanna check if it is metamask or not then we can use window.ethereum.isMetaMask
   * or we can also use window.ethereum.isConnected() to do this auto
   */
  //   useEffect(() => {
  //     if (window.ethereum == null) {
  //       console.log("Metamask not installed");
  //       return;
  //     }
  //     setProvider(new ethers.BrowserProvider(window.ethereum));
  //   }, []);

  /**
   * Disonnection hook
   * docs reference
   *  https://docs.metamask.io/wallet/reference/provider-api/#disconnect
   *  https://docs.metamask.io/wallet/reference/provider-api/#disconnect
   * https://ethereum.stackexchange.com/questions/93502/metamask-api-cant-detect-events-connect-and-disconnect-in-react-js
   *
   * since the disonnect event not working so using accountsChanged event along with some tweeks
   * Since we are not using connection onMount useEffect so we need to use function connectToMetaMask
   */
  useEffect(() => {
    function disconnectionHandler(account) {
      if (account.length == 0) setProvider(null);
    }
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", disconnectionHandler);
    }
    return () => {
      window.ethereum.removeListener("accountsChanged", disconnectionHandler);
    };
  }, []);

  useEffect(() => {
    async function getSigner() {
      const signer = await provider.getSigner();
      setSigner(signer);
    }
    if (provider) getSigner();
  }, [provider]);

  function connectToMetaMask() {
    if (window.ethereum == null) {
      console.log("Metamask not installed");
      return;
    }
    setProvider(new ethers.BrowserProvider(window.ethereum));
  }
  return (
    <Context.Provider value={{ signer, provider, connectToMetaMask }}>
      {children}
    </Context.Provider>
  );
}
