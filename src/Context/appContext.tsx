import { createContext, useState } from "react";
import { useLogin } from "../Hooks/useLogin";
import { AppContextProps } from "../Types/types";

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({ children }) {
  const hookUseLogin = useLogin();

  const [videoGravado, setVideoGravado] = useState({ uri: "" });

  const [backgroundColor, setBackgroundColor] = useState("#fff");

  function alterTheme() {
    console.log("Log line 18: ");
    setBackgroundColor((prev) => (prev === "#fff" ? "#0009" : "#fff"));
  }

  return (
    <AppContext.Provider
      value={{
        ...hookUseLogin,
        videoGravado,
        setVideoGravado,
        backgroundColor,
        alterTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
