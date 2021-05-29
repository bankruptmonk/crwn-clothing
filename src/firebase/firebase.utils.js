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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //console.log(snap);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;