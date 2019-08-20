import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCz9afQ0lTWbY8Pv5rFxlIAlfNEJ-7cyM",
    authDomain: "crwn-db-backend.firebaseapp.com",
    databaseURL: "https://crwn-db-backend.firebaseio.com",
    projectId: "crwn-db-backend",
    storageBucket: "",
    messagingSenderId: "752131416503",
    appId: "1:752131416503:web:5a07dfac732a3323"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
