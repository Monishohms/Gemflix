// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVLh5jvIUufKwT7YYBjxHT64NPbb_19hI",
  authDomain: "netflixgpt-c0959.firebaseapp.com",
  projectId: "netflixgpt-c0959",
  storageBucket: "netflixgpt-c0959.appspot.com",
  messagingSenderId: "892915921602",
  appId: "1:892915921602:web:5f7dac009f397b94bfc15b",
  measurementId: "G-XZQH8KR41C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
