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
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    signInWithCustomToken,
  } from "firebase/auth";
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
  export const auth = getAuth(firebaseApp);

  export const addItem = async (data) => {
    const result = await addDoc(collection(db, "items"), data);
    return result;
  };

  //Sign up:
  export const signUp = async (email, password, fullName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // store.dispatch(
    //   authSlice.actions.setData({
    //     id: user.uid,
    //     email: user.email,
    //     fullName: user.displayName,
    //     token: user.accessToken,
    //   })
    // );
    return user;
  };
  
  export const logout = async () => {
    await signOut(auth);
    // store.dispatch(authSlice.actions.logout());
  };
  
  export const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    // store.dispatch(
    //   authSlice.actions.setData({
    //     id: user.uid,
    //     email: user.email,
    //     fullName: user.displayName,
    //     token: user.accessToken,
    //   })
    // );
    return user;
  };