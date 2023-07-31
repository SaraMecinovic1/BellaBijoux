import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyACyaYKAtcjnd4GCSlTENtM1A4grk1eTd0",
    authDomain: "react-finally-project.firebaseapp.com",
    projectId: "react-finally-project",
    storageBucket: "react-finally-project.appspot.com",
    messagingSenderId: "325051274777",
    appId: "1:325051274777:web:0f4f321d14558f29103c88",
    measurementId: "G-FC2B93SVFQ"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig); //app
  export const db = getFirestore(firebaseApp);

  export const addItem = async (data) => {
    const result = await addDoc(collection(db, "items"), data);
    return result;
  };