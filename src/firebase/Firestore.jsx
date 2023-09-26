import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
  getDocs,
  writeBatch,
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
  console.log("Subscribing to onSnapshotGeneral...");
  const q = query(collection(db, mycollection));
  return onSnapshot(q, (querySnapshot) => {
    console.log("Snapshot received:", querySnapshot.docs.length, "documents");
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(
      "Updating state with",
      todosArr.length,
      "items",
      "this is: ",
      todosArr
    );
    setter(todosArr);
  });
};

export const myOnSnapshotGeneralIndexZero = (setter, mycollection) => {
  console.log(
    "myOnSnapshotGeneralIndexZero Subscribing to onSnapshotGeneral..."
  );
  const q = query(collection(db, mycollection));
  return onSnapshot(q, (querySnapshot) => {
    console.log(
      "myOnSnapshotGeneralIndexZero Snapshot received:",
      querySnapshot.docs.length,
      "documents"
    );
    if (querySnapshot.docs.length === 1) {
      const doc = querySnapshot.docs[0];
      const newData = { ...doc.data(), id: doc.id };
      console.log("myOnSnapshotGeneralIndexZero Updating state with", newData);
      setter([newData]);
    } else {
      console.error(
        "myOnSnapshotGeneralIndexZero Expected exactly one document, but received",
        querySnapshot.docs.length,
        "documents"
      );
    }
  });
};

export const mySliderAdv = async (setter, mycollection, docId) => {
  console.log("Fetching document......................................");

  try {
    const q = query(collection(db, mycollection));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      const doc = querySnapshot.docs[0];
      const data = { ...doc.data(), id: doc.id };

      console.log("Document received:", data);
      setter([data]);
    } else {
      console.log("Document not found.");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};

export const myAddGeneral = async (collection, elementName, formData) => {
  console.log(`myAddGeneral`, formData);
  const docRef = elementName
    ? doc(db, collection, elementName)
    : doc(collection(db, collection));

  await setDoc(docRef, formData);
};

export const myUpdateGeneral = async (collection, id, data) => {
  console.log(`myUpdateGeneral run`);

  console.log('collection: ',collection,'id: ',id,'data: ',data)
  const docRef = id
    ? doc(db, collection, id)
    : doc(collection(db, collection));

  await updateDoc(docRef, data);
};

export const myDeleteGeneral = async (collection, id) => {
  console.log(`myDeleteGeneral run`);

  console.log('collection: ',collection,'id: ',id,)
  const docRef = doc(db, collection, id)
   

  await deleteDoc(docRef);
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

export const myAddGeneral3 = async (categoryName, elementName, formData) => {
  //console.log(`myAddGeneral2`, formData);

  // Exclude the "name" field from formData
  const { name, ...dataToStore } = formData;

  const docRef = elementName
    ? doc(db, categoryName, elementName)
    : doc(collection(db, categoryName));

  await setDoc(docRef, dataToStore);
};

export const updateAndRefreshDocument = async (
  collectionName,
  documentId,
  newData
) => {
  try {
    const documentRef = doc(db, collectionName, documentId); // Firestore document reference

    // Update the document with new data
    await setDoc(documentRef, newData);

    // Fetch the updated document to refresh it
    const updatedDocumentSnapshot = await getDoc(documentRef);
    if (updatedDocumentSnapshot.exists()) {
      const updatedData = updatedDocumentSnapshot.data();
      console.log("Document updated and refreshed:", updatedData);
      return updatedData;
    } else {
      console.log("Document not found after update.");
      return null;
    }
  } catch (error) {
    console.error("Error updating and refreshing document:", error);
    return null;
  }
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

// Az adatok mentését végző funkció
export const saveDataToFirestore = async (collectionName, data) => {
  console.log("saveDataToFirestore run");
  const collectionRef = collection(db, collectionName);
  data.forEach(async (item) => {
    const docRef = doc(collectionRef);
    await setDoc(docRef, item);
  });
};
/*
const addData = async (newData) => {
  try {
    const docRef = await firestore.collection('yourCollectionName').add(newData);
    console.log('Sikeresen hozzáadva, ID:', docRef.id);
  } catch (error) {
    console.error('Hozzáadás sikertelen:', error);
  }
};*/

// Az adatok figyelését végző funkció
export const watchDataChanges = (collectionName, setter) => {
  console.log("watchDataChanges run");
  const q = query(collection(db, collectionName));
  return onSnapshot(q, (querySnapshot) => {
    console.log("watchDataChanges onSnapshot run");
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log("watchDataChanges onSnapshot run forEach");
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log("watchDataChanges before setter run");
    setter(data);
  });
};
