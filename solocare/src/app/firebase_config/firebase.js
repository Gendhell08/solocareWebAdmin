
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSAzF4fmxDnOQ4-hwFN2JnoqBJWqjz_PU",
  authDomain: "solocare-9de0c.firebaseapp.com",
  projectId: "solocare-9de0c",
  storageBucket: "solocare-9de0c.appspot.com",
  messagingSenderId: "655185497529",
  appId: "1:655185497529:web:e777d83795245e347e3a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);