

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your Firebase Config (replace with your own config from Firebase console)
const firebaseConfig = {
    apiKey: "AIzaSyC9WthnsfUoy4511jwqIEsw4uUXi02pRxU",
    authDomain: "netflix-clone-232e3.firebaseapp.com",
    projectId: "netflix-clone-232e3",
    storageBucket: "netflix-clone-232e3.firebasestorage.app",
    messagingSenderId: "204395672704",
    appId: "1:204395672704:web:d5eb9b0a4f2ec3fb492265",
    measurementId: "G-VS5GLEDQ3P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export authentication methods
export { auth, provider, signInWithPopup, signOut };
