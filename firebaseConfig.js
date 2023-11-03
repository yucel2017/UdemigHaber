// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmTO2-yxR39S9_Hz7YEWptOf5kqGDVyFE",
  authDomain: "udmghbr.firebaseapp.com",
  projectId: "udmghbr",
  storageBucket: "udmghbr.appspot.com",
  messagingSenderId: "889475238318",
  appId: "1:889475238318:web:f8f363b3b160baf315e03f",
  measurementId: "G-2E6BKEE7BR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);