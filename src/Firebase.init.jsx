// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpnHVzufPT2wZd8LzEsrs-RcbMZeqBpkc",
  authDomain: "abdullahalmasud771.firebaseapp.com",
  projectId: "abdullahalmasud771",
  storageBucket: "abdullahalmasud771.appspot.com",
  messagingSenderId: "546951497281",
  appId: "1:546951497281:web:768d827c8c0b440304e8c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
