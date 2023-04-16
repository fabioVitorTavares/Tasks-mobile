import { Children, ReactNode, createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../Hooks/useLogin";
import { AppContextProps } from "../Types/types";

export const AppContext = createContext<AppContextProps | null>(null);



export function AppContextProvider({ children }) {
  
  const hookUseLogin = useLogin();
  
  const name = 'Fábio';
  return(
    <AppContext.Provider value={{ name, ...hookUseLogin }}>
      { children }
    </AppContext.Provider>
  );
 }

