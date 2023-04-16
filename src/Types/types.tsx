
export type UserProps = {
  id: string;
  name: string;
  permissions: string[];
  token: string;
}

export type AppContextProps = {
  name: string,
  user: UserProps,
  isAuthenticated: Function,
  signin: Function,
  signout: Function,
}