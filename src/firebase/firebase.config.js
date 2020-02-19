import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbEhK4swuI2FbhnEpbOb3Ug7-jIFtzWzA",
  authDomain: "ahirbudhnya-2a2e5.firebaseapp.com",
  databaseURL: "https://ahirbudhnya-2a2e5.firebaseio.com",
  projectId: "ahirbudhnya-2a2e5",
  storageBucket: "ahirbudhnya-2a2e5.appspot.com",
  messagingSenderId: "307045802250",
  appId: "1:307045802250:web:809fac057d055de8655af3",
  measurementId: "G-FQLNE5QQDP"
};


firebase.initiallizeApp(firebaseConfig);

//AUTH
export const auth = firebase.auth();

// GOOGLE
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);


//FIRESTORE
export const firestore = firebase.firestore();