import { auth } from "../firebase";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider);
  signInWithRedirect(auth, provider);
};

export const logOut = () => {
  signOut(auth);
};


export const myOnAuthStateChange=((setUser) => {
 return onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("User", currentUser);
  });
});