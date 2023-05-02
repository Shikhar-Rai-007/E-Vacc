// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlc78hKyTN1qW8k2c1IUj1AARQpPKXtAE",
  authDomain: "e-vacc-f06d0.firebaseapp.com",
  projectId: "e-vacc-f06d0",
  storageBucket: "e-vacc-f06d0.appspot.com",
  messagingSenderId: "890670029443",
  appId: "1:890670029443:web:178373d0092672ebeb99b6",
  measurementId: "G-CK8FB8JJJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);