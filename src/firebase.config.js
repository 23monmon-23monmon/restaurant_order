// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEQijNG86Zi1u9t__kQXlYsHF_Mml9Wk",
  authDomain: "phoneopt-auth.firebaseapp.com",
  projectId: "phoneopt-auth",
  storageBucket: "phoneopt-auth.firebasestorage.app",
  messagingSenderId: "679126475216",
  appId: "1:679126475216:web:a9e3536cbb1a6fa37019d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;
