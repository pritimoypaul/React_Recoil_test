import React from "react";
import { useRecoilState } from "recoil";
import { usernameState } from "./States";

function Username() {
  const username = useRecoilState(usernameState);
  return (
    <div>
      <p>{username}</p>
    </div>
  );
}

export default Username;
