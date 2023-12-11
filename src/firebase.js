// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOo3qzeQWVCkiUFoIo-YY9P0dMdmlzZds",
  authDomain: "livechat-a80fc.firebaseapp.com",
  databaseURL: "https://livechat-a80fc-default-rtdb.firebaseio.com",
  projectId: "livechat-a80fc",
  storageBucket: "livechat-a80fc.appspot.com",
  messagingSenderId: "619068369047",
  appId: "1:619068369047:web:d0df565ca4a9940956a1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
