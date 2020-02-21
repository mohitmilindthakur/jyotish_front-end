import {auth} from './../firebase.config';

// GOOGLE
const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
