import firebase, {firestore} from './../firebase.config';

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
    const kundaliDocSnapshot = await kundaliDocRef.get();

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
        console.log('entered')
      await userRef.update({
        kundalis: firebase.firestore.FieldValue.arrayUnion(kundaliDocRef)
      })
    }catch(err) {
    }
  }

  return kundaliDocRef;
}

// GET KUNDALI DETAILS FROM KUNDALI REF
export const getKundali = async (kundaliRef) => {
    const kundaliSnapshot = await kundaliRef.get();
    return kundaliSnapshot.data();
}

// GET ALL KUNDALIS OF A USER
export const getAllKundalisOfAUser = async (userID) => {
    const userRef = firestore.doc(`/users/${userID}`);

    const userSnapshot = await userRef.get();

    let allKundalisPromise;
    let allKundalis;

    if (userSnapshot.exists) {

        const {kundalis} = userSnapshot.data();

        allKundalisPromise = kundalis.map(async (kundaliRef) => {
            const kundaliSnapshot = await kundaliRef.get();
            console.log(kundaliSnapshot);
            const kundali = kundaliSnapshot.exists && kundaliSnapshot.data();
            console.log(kundali); 
            return kundali;
        })

        allKundalis = await Promise.all(allKundalisPromise)
    }
    console.log('all kundalis inside the firestore.js file', allKundalis);

    return allKundalis;
}

//SAVING A KUNDALI

export const saveKundali = async (userID, birthDetails) => {
  if (birthDetails.id) {
    const kundaliRef = firestore.doc(`/kundalis/${birthDetails.id}`);
    await kundaliRef.update({...birthDetails});
    return kundaliRef;
  }

  else {
    return addKundaliForAUser(userID, birthDetails)
  }
}