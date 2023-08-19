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

export const myDeleteElement = async (deletecollectionname,id) => {
  console.log(id);
  await deleteDoc(doc(db, deletecollectionname, id));
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

export const myAddGeneral = async (categoryName,elementName, formData) => {
  console.log(`myAddElements`, formData);
  await setDoc(doc(db, categoryName, elementName), formData);
};

