import { db } from "../../firebase";
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
import { storage } from "../../firebase";

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

export const myAddElements = async (elementName, formData) => {
  console.log(`myAddElements`, formData);
  await setDoc(doc(db, "elements", elementName), formData);
};

export const myAddGroup = async (collectionName, docid, formData) => {
  //console.log(`myAddElements`, formData);
  await setDoc(doc(db, collectionName, docid), formData);
};

export const myOnSnapshotGeneral = (setter, mycollection) => {
  //console.log('Subscribing to onSnapshotGeneral...');
  const q = query(collection(db, mycollection));
  return onSnapshot(q, (querySnapshot) => {
    // console.log('Snapshot received:', querySnapshot.docs.length, 'documents');
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    // console.log('Updating state with', todosArr.length, 'items','this is: ',todosArr);
    setter(todosArr);
  });
};

export const myAddGeneral = async (categoryName, elementName, formData) => {
  console.log(`myAddElements`, formData);
  await setDoc(doc(db, categoryName, elementName), formData);
};

export const myDeleteElement = async (deletecollectionname, id) => {
  console.log(id);
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
      console.log("Image deleted successfully");
      // Additional actions after image deletion
    } catch (error) {
      console.error("Error deleting image from storage:", error);
    }
  }
};
