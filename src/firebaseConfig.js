import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from "firebase/auth";
import { getDatabase } from "firebase/database"; 
import { getStorage } from "firebase/storage";   
const firebaseConfig = {
  apiKey: "AIzaSyC1PmiAfJRb9JNI4zub6cyNHk6aXFSQDFs",
  authDomain: "conceptmabelles.firebaseapp.com",
  databaseURL: "https://conceptmabelles-default-rtdb.firebaseio.com",
  projectId: "conceptmabelles",
  storageBucket: "conceptmabelles.appspot.com", 
  messagingSenderId: "708848337518",
  appId: "1:708848337518:web:fb1ab4b8c429d367a51c7f"
};


const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const database = getDatabase(app);


const storage = getStorage(app);

export {
  app,
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  database,
  storage
};
