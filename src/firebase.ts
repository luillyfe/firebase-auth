import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.json";

// init firebase application
const app = initializeApp(firebaseConfig);
console.log(app);
