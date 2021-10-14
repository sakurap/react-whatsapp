import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD_krTi9SStqjNMG57iilZW9grvChDf3Bk",
    authDomain: "whatsapp-clone-87542.firebaseapp.com",
    projectId: "whatsapp-clone-87542",
    storageBucket: "whatsapp-clone-87542.appspot.com",
    messagingSenderId: "206433764199",
    appId: "1:206433764199:web:b89ebd69dd109326b9a5c2"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
    db,
    auth,
    provider,
    storage,
    audioStorage,
    createTimestamp,
    serverTimestamp
}