import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYoyIW8d_JkaffDllDB6lHOvLKMD3ZJE",
  authDomain: "netflix-clone-53144.firebaseapp.com",
  projectId: "netflix-clone-53144",
  storageBucket: "netflix-clone-53144.appspot.com",
  messagingSenderId: "360299170474",
  appId: "1:360299170474:web:7fd32aaa5b98e62ccc5ed3",
  measurementId: "G-F1PFKB1NC5"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
