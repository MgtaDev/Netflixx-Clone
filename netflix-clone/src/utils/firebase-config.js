// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)