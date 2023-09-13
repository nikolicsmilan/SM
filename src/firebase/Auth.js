import { auth } from "../firebase";
import { myAddGeneral } from "./Firestore";

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

export const myOnAuthStateChange = (setUser) => {
  return onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    setUser(currentUser);
    console.log(
      "Userrrrrrrrrrrrrrrrrrrrr",
      currentUser,
      "currentUser.displayName",
      currentUser.displayName,
      "currentUser.metadata: ",
      currentUser.metadata
    );

    if (currentUser) {
      const data = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        creationTime: currentUser.metadata.creationTime,
        lastSignInTime: currentUser.metadata.lastSignInTime,

        // metadata: currentUser.metadata,
      };

      try {
        await myAddGeneral("Users", currentUser.displayName, data);
        console.log("User data saved successfully");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  });
};
