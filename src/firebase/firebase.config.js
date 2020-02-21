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


firebase.initializeApp(firebaseConfig);

//AUTH
export const auth = firebase.auth();

// GOOGLE
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


//FIRESTORE
export const firestore = firebase.firestore();

//ADDING USER TO THE FIRESTORE

export const addUserToFirestore = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const {email, displayName, photoURL, uid} = userAuth;

    try {
      await userRef.set({email, displayName, photoURL, uid, kundalis: []})
    }catch(err) {
      console.log("Error!", err.message)
    }
  }
  return userRef;
}

// ADDING A KUNDALI TO THE FIREBASE
export const addKundaliToFirestore = async (birthDetails) => {

  if (birthDetails.id) {
    const kundaliDocRef = firestore.doc(`/kundalis/${birthDetails.id}`);
    const kundaliDocSnapshot = kundaliDocRef.get();

    if (kundaliDocSnapshot.exists) {
      await kundaliDocRef.update({...birthDetails});
      return kundaliDocRef;
    }
  }

  else {
    const kundalisRef = firestore.collection('/kundalis');
    const newKundaliDocRef = kundalisRef.doc();
    const newKundaliSnapshot = await kundalisRef.get();

    if (!newKundaliSnapshot.exists) {
      await newKundaliDocRef.set({...birthDetails, id: newKundaliDocRef.id});
      return newKundaliDocRef;
    }

  }

}

// ADDING A KUNDALI TO A USER
export const addKundaliForAUser = async (userUID, birthDetails) => {
  const kundaliDocRef = await addKundaliToFirestore(birthDetails);


  const userRef = firestore.doc(`/users/${userUID}`);

  const userSnapshot = await userRef.get();

  if (userSnapshot.exists) {
    try{
      return await userRef.update({
        kundalis: firebase.firestore.FieldValue.arrayUnion(kundaliDocRef)
      })
    }catch(err) {
    }
  }
}