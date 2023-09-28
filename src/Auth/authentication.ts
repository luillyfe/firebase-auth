import {
  AuthError,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

// Sign in with email and password
export const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      console.log(userCredential.user);
    })
    .catch((error: AuthError) => {
      console.log(error.code, error.message);
    });
};
