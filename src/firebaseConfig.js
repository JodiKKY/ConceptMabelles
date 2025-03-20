import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1PmiAfJRb9JNI4zub6cyNHk6aXFSQDFs",
  authDomain: "conceptmabelles.firebaseapp.com",
  databaseURL: "https://conceptmabelles-default-rtdb.firebaseio.com",
  projectId: "conceptmabelles",
  storageBucket: "conceptmabelles.firebasestorage.app",
  messagingSenderId: "708848337518",
  appId: "1:708848337518:web:fb1ab4b8c429d367a51c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };