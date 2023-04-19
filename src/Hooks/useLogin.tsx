import { useEffect, useState } from "react";
import { UserProps } from "../Types/types";

export function useLogin() {
  const user: UserProps = {
    id: "",
    name: "",
    permissions: [],
    token: "",
  };

  const is = {
    Authenticated: false,
  };

  const signin = async function (login: string, password: string) {
    return new Promise((resolve, reject) => {
      if (login === "1" && password === "1") {
        is.Authenticated = true;
        user.id = "12AR4E";
        user.name = "fabio";
        user.permissions = ["admin", "user"];
        user.token = "hjhf9853535jk24924942";
        setTimeout(() => resolve(user), 2000);
      } else {
        setTimeout(() => resolve(null), 2000);
      }
    });
  };

  function signout() {
    user.token = "";
    is.Authenticated = false;
  }

  return {
    user,
    is,
    signin,
    signout,
  };
}
