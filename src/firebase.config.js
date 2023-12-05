import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzItiZS22dCpKwX_VF9z-pE8bcaR98dXw",
  authDomain: "auth-83da6.firebaseapp.com",
  projectId: "auth-83da6",
  storageBucket: "auth-83da6.appspot.com",
  messagingSenderId: "557398090463",
  appId: "1:557398090463:web:605e31353731e42c2fbf6a",
  measurementId: "G-RXTJJ84FZD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
