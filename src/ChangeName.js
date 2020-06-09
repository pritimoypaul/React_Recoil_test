import React from "react";
import { useRecoilState } from "recoil";
import { usernameState } from "./States";

const ChangeName = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
    </div>
  );
};

export default ChangeName;
