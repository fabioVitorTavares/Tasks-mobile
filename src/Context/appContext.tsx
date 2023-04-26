import { Children, ReactNode, createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../Hooks/useLogin";
import { AppContextProps } from "../Types/types";

export const AppContext = createContext<AppContextProps | null>(null);



export function AppContextProvider({ children }) {
  
  const hookUseLogin = useLogin();

  const [videoGravado, setVideoGravado] = useState({});
  
  
  const name = 'Fábio';
  return(
    <AppContext.Provider value={{ name, ...hookUseLogin, videoGravado, setVideoGravado }}>
      { children }
    </AppContext.Provider>
  );
 }

