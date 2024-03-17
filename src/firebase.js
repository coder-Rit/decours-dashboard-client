// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGzbEjRjYdllyJ464UlAaxSa5hq5QRRjo",
  authDomain: "decorus-dashbord.firebaseapp.com",
  projectId: "decorus-dashbord",
  storageBucket: "decorus-dashbord.appspot.com",
  messagingSenderId: "136903967455",
  appId: "1:136903967455:web:a6591ea2f86187a4ef5f6a",
  measurementId: "G-SRHDFMTYCQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);