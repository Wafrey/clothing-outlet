import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD47TkKICm1OAZUXT6ftj5cbuJAsk2RlgA",
    authDomain: "clothing-outlet-db.firebaseapp.com",
    databaseURL: "https://clothing-outlet-db.firebaseio.com",
    projectId: "clothing-outlet-db",
    storageBucket: "",
    messagingSenderId: "874033399596",
    appId: "1:874033399596:web:e1f12cc28179802a"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (err){
        console.log(err);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;