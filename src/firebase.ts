import { initializeApp } from "firebase/app";
import {
  UserCredential,
  AuthError,
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig.json";

// init firebase application
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign in with email and password
export const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      console.log(userCredential.user);
    })
    .catch((error: AuthError) => {
      console.log(error.code, error.message);
    });
};

// using authentication emulator
connectAuthEmulator(auth, "http://localhost:9099/");
