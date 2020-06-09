import React from "react";
import { RecoilRoot } from "recoil";
import Username from "./Username";
import ChangeName from "./ChangeName";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Username />
        <ChangeName />
      </div>
    </RecoilRoot>
  );
}

export default App;
