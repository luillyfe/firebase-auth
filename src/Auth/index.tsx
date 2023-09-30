import { ReactElement, createContext, useContext, useMemo } from "react";
import { User } from "firebase/auth";

import { signIn } from "./authentication";

interface AuthContextT {
  user: User | null;
  logIn: (email: string, password: string) => Promise<User | null>;
}

export const AuthContext = createContext<AuthContextT>({
  user: null,
  logIn: () => new Promise((resolve) => resolve(null)),
});

// thanks to https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
// for the insights
function AuthProvider({ children }: { children: ReactElement }) {
  const [user] = [null];
  const logIn = async (email: string, password: string) => {
    return await signIn(email, password);
  };

  const value = useMemo(() => ({ user, logIn }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
