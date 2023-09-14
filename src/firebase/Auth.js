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

export const logOut = async (user) => {
  try {
    const data = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      creationTime: user.metadata.creationTime,
      lastSignInTime: user.metadata.lastSignInTime,
      active: false,
    };

    await myAddGeneral("Users", user.displayName, data);
    console.log("User data updated successfully");
  } catch (error) {
    console.error("Error updating user data:", error);
  }

  try {
    console.log("Run logout function...");
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};


export const myOnAuthStateChange = (setUser) => {
  return onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser) {
      // User is logged in, update the "active" property to true
      const data = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        creationTime: currentUser.metadata.creationTime,
        lastSignInTime: currentUser.metadata.lastSignInTime,
        active: true,
        //uid:currentUser.uid
      };

      try {
        await myAddGeneral("Users", currentUser.displayName, data); // Use UID as the identifier
        console.log("User data saved successfully");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      // User is not logged in, update the "active" property to false
      console.log("There isn't currentUser");
    }
  });
};

/*
export const myOnAuthStateChange = (setUser) => {
  return onAuthStateChanged(auth, async (currentUser) => {   
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
        active: true
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
};*/
/*
export const myOnAuthStateChange = (setUser,user) => {
  return onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      console.log(
        "Userrrrrrrrrrrrrrrrrrrrr",
        currentUser,
        "currentUser.displayName",
        currentUser.displayName,
        "currentUser.metadata: ",
        currentUser.metadata
      );
      const data = {
        displayName: currentUser?.displayName,
        email: currentUser?.email,
        photoURL: currentUser?.photoURL,
        creationTime: currentUser?.metadata?.creationTime,
        lastSignInTime: currentUser?.metadata?.lastSignInTime,
        active: true, // Set active to true when the user logs in
      };

      try {
        await myAddGeneral("Users", currentUser?.displayName, data);
        console.log("User data saved successfully");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      // User is not logged in, update the "active" property to false
      const data = {
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        creationTime: user?.metadata?.creationTime,
        lastSignInTime: user?.metadata?.lastSignInTime,
        active: false,
      };

      try {
        // Assuming you have a unique identifier for the user (e.g., their displayName)
        await myAddGeneral("Users", user?.displayName, data);
        console.log("User data updated to inactive successfully");
      } catch (error) {
        console.error("Error updating user data:", error);
      }

    }
  });
};*/
