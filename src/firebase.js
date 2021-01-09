import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt_j5ujdLfd9CzDmVGpdG17MQKE_EeueM",
    authDomain: "clone-app-63500.firebaseapp.com",
    projectId: "clone-app-63500",
    storageBucket: "clone-app-63500.appspot.com",
    messagingSenderId: "157464843223",
    appId: "1:157464843223:web:7c78272b666d4a90c4f192",
    measurementId: "G-WTEMFMX15D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};