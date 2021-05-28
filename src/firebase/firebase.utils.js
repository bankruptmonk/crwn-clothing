import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyBMGQxo2Xyue-HTOmDqPX1d5xPlRIN1Sqg",
    authDomain: "crwn-clothing-7b374.firebaseapp.com",
    projectId: "crwn-clothing-7b374",
    storageBucket: "crwn-clothing-7b374.appspot.com",
    messagingSenderId: "928241365601",
    appId: "1:928241365601:web:8424143941e41264c6f020",
    measurementId: "G-E78XR2JTE3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;