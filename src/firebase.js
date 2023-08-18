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
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACyaYKAtcjnd4GCSlTENtM1A4grk1eTd0",
  authDomain: "react-finally-project.firebaseapp.com",
  projectId: "react-finally-project",
  storageBucket: "react-finally-project.appspot.com",
  messagingSenderId: "325051274777",
  appId: "1:325051274777:web:0f4f321d14558f29103c88",
  measurementId: "G-FC2B93SVFQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); //app
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp); //storage
export default storage;

export const addItem = async (data) => {
  //data=values
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
  return user;
};

// Logout:
export const logout = async () => {
  await signOut(auth);
  console.log("odjavljeni ste");
};

//Login:
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  console.log(user);

  return user;
};

// Za proveru da li je prijavljen ili nije korisnik
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Korisnik je prijavljen:", user.email);
  } else {
    console.log("Korisnik nije prijavljen.");
  }
});

//Ubacila ovaj rule da samo prijavljeni mogu pisati,brisati,update
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read;
//       allow write, update, delete: if request.auth != null;
//     }
//   }
// }

//Uzimamo podatke sa firebase:
export const getItem = async () => {
  const myColection = collection(db, "items");
  const itemsResult = await getDocs(myColection);
  console.log(itemsResult);
  const itemsList = itemsResult.docs.map((doc) => {
    // docs === predstavlja rezultate upita nad kolekcijom dokumenata.
    const data = doc.data(); //podaci
    const id = doc.id; //id dokumenta
    return { ...data, id: id };
  });
  return itemsList;
};

//Uzeti samo jedan podatak sa ID:
export const getItemeById = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return { ...data, id: id };
};

