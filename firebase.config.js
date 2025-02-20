// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFLToD7fTWxJyZyD_O2gxI65vXFrNNOEU",
  authDomain: "red-blood-cell.firebaseapp.com",
  projectId: "red-blood-cell",
  storageBucket: "red-blood-cell.firebasestorage.app",
  messagingSenderId: "756272047600",
  appId: "1:756272047600:web:615da5b86a3b4b61f56935",
  measurementId: "G-02T30DEQPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);