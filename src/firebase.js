import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5h-gymw17IA-CLwu_LZobLucoQi-JHt4",
    authDomain: "netflix-clone-a2c9e.firebaseapp.com",
    projectId: "netflix-clone-a2c9e",
    storageBucket: "netflix-clone-a2c9e.appspot.com",
    messagingSenderId: "682925509706",
    appId: "1:682925509706:web:22fa8a1c7b41784bdfaab3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;