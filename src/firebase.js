import filrebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_krTi9SStqjNMG57iilZW9grvChDf3Bk",
    authDomain: "whatsapp-clone-87542.firebaseapp.com",
    projectId: "whatsapp-clone-87542",
    storageBucket: "whatsapp-clone-87542.appspot.com",
    messagingSenderId: "206433764199",
    appId: "1:206433764199:web:b89ebd69dd109326b9a5c2"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);