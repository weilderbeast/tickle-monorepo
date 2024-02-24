import { createContext } from "react";
import { initializeFirebase } from "../firebase/firebase-init";

export const AppContext = createContext({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  // all services are initialized here
  initializeFirebase();
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
