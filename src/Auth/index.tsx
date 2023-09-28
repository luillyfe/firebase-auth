import { ReactElement, createContext } from "react";

import { signIn } from "./authentication";

export const AuthContext = createContext({ auth: "", signIn });

function AuthContextProvider({ children }: { children: ReactElement }) {
  const value = { auth: "", signIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
