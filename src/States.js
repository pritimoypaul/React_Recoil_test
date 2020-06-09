import { atom } from "recoil";

const usernameState = atom({
  key: "username",
  default: "Paul"
});

export { usernameState };
