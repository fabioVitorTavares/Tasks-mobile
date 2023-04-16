import { useState } from "react";
import { UserProps } from "../Types/types";

export function useLogin() {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  function signin(login: string, password: string) {
    if (login === "1" && password === "1") {
      setUser({
        id: "12AR4E",
        name: "fabio",
        permissions: ["admin", "user"],
        token: "hjhf9853535jk24924942",
      });
    } else {
      setUser(null);
    }
  }

  function signout() {}

  return {
    user,
    isAuthenticated,
    signin,
    signout,
  };
}
