import React, { useState } from "react";
import Users from "./Users";
import MyTweets from "./MyTweets";
import AllTweets from "./AllTweets";

export default function View() {
  const views = {
    allTweets: <AllTweets />,
    myTweets: <MyTweets />,
    users: <Users />,
  };
  const [current, setCurrent] = useState("allTweets");
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginInline: "auto",
          marginBlock: "1rem",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {Object.entries(views).map(([k, v]) => {
          return (
            <div>
              <input
                name="value"
                onChange={() => setCurrent(k)}
                type="radio"
                id={k}
                checked={current === k}
                value={k}
                placeholder={k}
              />
              <label style={{ fontSize: "1.7rem" }} htmlFor={k}>
                {k.toUpperCase()}
              </label>
            </div>
          );
        })}
      </div>
      {views[current]}
    </div>
  );
}
