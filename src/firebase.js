import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlpG3u5uviiUsl5SCCOUdHWxABmLuiyk",
  authDomain: "tesla-clone-173eb.firebaseapp.com",
  projectId: "tesla-clone-173eb",
  storageBucket: "tesla-clone-173eb.appspot.com",
  messagingSenderId: "497640992433",
  appId: "1:497640992433:web:1e9604143f8e7f08bffc90",
  measurementId: "G-3G9HSFSJV8"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { db, auth }