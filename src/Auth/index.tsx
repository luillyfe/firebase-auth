import { ReactElement, createContext, useContext, useMemo } from "react";
import { User } from "firebase/auth";

import { signIn } from "./authentication";
import useLocalStorage from "../Hooks/useLocalStorage";

interface AuthContextT {
  user: User | null;
  logIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextT>({
  user: null,
  logIn: () => new Promise((resolve) => resolve()),
});

// thanks to https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
// for the insights
function AuthProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useLocalStorage("user", null);
  const logIn = async (email: string, password: string) => {
    const user = await signIn(email, password);
    setUser(user);
  };

  const value = useMemo(() => ({ user, logIn }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
