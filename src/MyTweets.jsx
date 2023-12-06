import { useEffect, useState } from "react";
import { useWallet } from "./Context";
import TwitterCards from "./TwitterCards";
/**
 * structure of the getAllTweets of an owner
 * id , author,content,timestamp,likes
 */
export default function MyTweets() {
  const [tweets, setTweets] = useState([]);
  const { contract, signerAddress } = useWallet();
  function tweetHandler() {
    contract?.getAllTweets(signerAddress).then((tweets) => {
      alert("Tweet created");
      const data = tweets.map((tweet) => {
        return {
          id: tweet[0],
          author: tweet[1],
          content: tweet[2],
          timeStamp: tweet[3],
          likes: tweet[4],
        };
      });

      setTweets(data.reverse());
    });
  }
  useEffect(() => {
    tweetHandler();
  }, []);

  //   resetting the tweets
  useEffect(() => {
    contract?.on("TweetCreated", tweetHandler);
    return () => {
      contract?.off("TweetCreated", tweetHandler);
    };
  }, [contract]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {tweets?.map((tweet) => (
        <TwitterCards
          author={tweet?.author}
          tweet={tweet?.content}
          key={tweet?.id}
        />
      ))}
    </div>
  );
}
