
export type UserProps = {
  id: string;
  name: string;
  permissions: string[];
  token: string;
}

type IsProps = {
  Authenticated: boolean;
}

export type AppContextProps = {
  name: string,
  user: UserProps,
  is: IsProps,
  signin: Function,
  signout: Function,
}

export type LoadingProps = {
  isLoading: boolean;
};