import { useEffect, useState } from "react";
import { UserProps } from "../Types/types";

export function useLogin() {
  const user: UserProps = {
    id: '',
    name: '',
    permissions: [],
    token: '',
  };
  
  const is = {
    Authenticated: false,
  };

  function signin(login: string, password: string) {
    console.log("Log line 11: ", login, password);
    if (login === "1" && password === "1") {
      is.Authenticated = true;
      user.id = "12AR4E";
      user.name = "fabio";
      user.permissions = ["admin", "user"];
      user.token = "hjhf9853535jk24924942";
    }
    return user;
  }

  function signout() {
    user.token = '';
    is.Authenticated = false;
  }

  return {
    user,
    is,
    signin,
    signout,
  };
}
