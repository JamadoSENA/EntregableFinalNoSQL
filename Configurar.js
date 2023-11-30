//import firebase from "firebase/app";
//import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();