// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu0SOEV5_IeMuH-6C-Thy3peilmRT9tw4",
  authDomain: "entregablefinalnosql.firebaseapp.com",
  projectId: "entregablefinalnosql",
  storageBucket: "entregablefinalnosql.appspot.com",
  messagingSenderId: "333228274032",
  appId: "1:333228274032:web:bb2733ba9a9d7e0d9ddfb5",
  measurementId: "G-MPJVCXCY6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);