import { useState } from "react";
import { UserProps } from "../Types/types";

export function useLogin() {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  function signin(login: string, password: string) {
    if (login === "fabio" && password === "123") {
      setUser({
        id: "12AR4E",
        name: "fabio",
        permissions: ["admin", "user"],
        token: "hjhf9853535jk24924942",
      });
    }
  }

  function signout() {
    setUser(null);
  }

  return {
    user,
    isAuthenticated,
    signin,
    signout,
  };
}
