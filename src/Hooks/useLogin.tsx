import { useEffect, useState } from "react";
import { UserProps } from "../Types/types";

export function useLogin() {
  const [user, setUser] = useState<UserProps | null>(null);
  useEffect(() => {
    console.log('Log line 7: ','render', user, isAuthenticated)
  },[user]);
  
  const isAuthenticated = !!user;

  async function signin(login: string, password: string) {
    if (login === "1" && password === "1") {
      setUser({
        id: "12AR4E",
        name: "fabio",
        permissions: ["admin", "user"],
        token: "hjhf9853535jk24924942",
      });
      return user;
    } else {
      setUser(null);
    }
    return null;
  }

  function signout() {}

  return {
    user,
    isAuthenticated,
    signin,
    signout,
  };
}
