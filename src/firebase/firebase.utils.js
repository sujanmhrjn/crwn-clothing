import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVaXi-XcKC5_A1oDIzbdTnjq2xjON7wc8",
    authDomain: "crwn-db-80897.firebaseapp.com",
    databaseURL: "https://crwn-db-80897.firebaseio.com",
    projectId: "crwn-db-80897",
    storageBucket: "crwn-db-80897.appspot.com",
    messagingSenderId: "670131378916",
    appId: "1:670131378916:web:4e47ec8eed88721ed2aaf1",
    measurementId: "G-7YXKYF09MC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  
  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,email, createdAt, ...additionalData
            })
        }catch(error){
            console.log("Error Creating user", error.message);
        }
    }
    return userRef;

  }

  export default firebase;