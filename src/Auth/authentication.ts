import {
  AuthError,
  User,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
  signOut as logOut,
} from "firebase/auth";

import app from "../firebase";

const auth = getAuth(app);

// Sign in with email and password
export const signIn = async (
  email: string,
  password: string
): Promise<User | null> => {
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential): User => {
      return userCredential.user;
    })
    // TODO: Handling error gracefully (not silent)
    .catch((error: AuthError) => {
      console.log(error.code, error.message);
    });

  if (user) {
    return user;
  }

  return null;
};

export const signOut = () => {
  return logOut(auth);
};
