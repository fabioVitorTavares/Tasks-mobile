import { Dispatch, SetStateAction } from "react";

export type UserProps = {
  id: string;
  name: string;
  permissions: string[];
  token: string;
};

type IsProps = {
  Authenticated: boolean;
};

export type AppContextProps = {
  name: string;
  user: UserProps;
  is: IsProps;
  signin: Function;
  signout: Function;
  videoGravado: { uri: string };
  setVideoGravado: Function;
  backgroundColor: string;
  alterTheme: () => void;
};

export type LoadingProps = {
  isLoading: boolean;
};

type TodayTasksProps = {
  title: string | number;
  id?: number;
};

export type ModalTasksOfDaysProps = {
  date: String;
  onClose: () => void;
};

export type ModalRegisterOptionsProps = {
  close: () => void;
};
