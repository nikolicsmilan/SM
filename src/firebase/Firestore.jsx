import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { storage } from "../firebase";

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "@firebase/storage";

export const myOnSnapshotElements = (setElements) => {
  const q = query(collection(db, "elements"));
  return onSnapshot(q, (querySnapshot) => {
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    setElements(todosArr);
  });
};

export const myOnSnapshotGeneral = (setter, mycollection) => {
 // console.log('Subscribing to onSnapshotGeneral...');
  const q = query(collection(db, mycollection));
  return onSnapshot(q, (querySnapshot) => {
   //  console.log('Snapshot received:', querySnapshot.docs.length, 'documents');
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    // console.log('Updating state with', todosArr.length, 'items','this is: ',todosArr);
    setter(todosArr);
  });
};

export const myAddGeneral = async (categoryName, elementName, formData) => {
  console.log(`myAddGeneral`, formData);
  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  await setDoc(docRef, formData);
};

export const myAddGeneral2 = async (categoryName, elementName, formData) => {
  //console.log(`myAddGeneral2`, formData);

  // Exclude the "name" field from formData
  const { name, ...dataToStore } = formData;

  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  await setDoc(docRef, dataToStore);
};

export const addMessage = async (categoryName, elementName, formData) => {
 // console.log(`addMessage`, formData);
/*
  const formDataObject = {
    // Map each element in the array to a property in the object
    element1: formData[0],
    element2: formData[1],
    element3: formData[2],
    element4: formData[3],
    element5: formData[4],
  };
  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  await setDoc(docRef, formDataObject);*/

  // Use the provided elementName if available, or let Firestore generate one.
  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  // Store the array directly in Firestore
  await setDoc(docRef, { formData });
};

export const addMessage2 = async (categoryName, elementName, formData) => {
//  console.log(`addMessage`, formData);

  // Exclude the "name" field from formData
 // const { name, ...dataToStore } = formData;
 const unwrappedData = { ...formData };
  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  await setDoc(docRef, unwrappedData);
};

export const myDeleteElement = async (deletecollectionname, id) => {
 // console.log(id);
  try {
    await deleteDoc(doc(db, deletecollectionname, id));
  } catch (error) {
    console.error("Error deleting element from database:", error);
  }
};

export const deleteImage = async (url) => {
  if (url) {
    const imageRef = ref(storage, url);

    try {
      await deleteObject(imageRef);
    //  console.log("Image deleted successfully");
      // Additional actions after image deletion
    } catch (error) {
      console.error("Error deleting image from storage:", error);
    }
  }
};
