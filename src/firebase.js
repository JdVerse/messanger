import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAxlTMnGZFCUfcXyOzAqh5z3xDCCChdL6w",
    authDomain: "messanger-a0ea5.firebaseapp.com",
    projectId: "messanger-a0ea5",
    storageBucket: "messanger-a0ea5.appspot.com",
    messagingSenderId: "461263347008",
    appId: "1:461263347008:web:09ebed349739b1188b2ea5",
    measurementId: "G-DHHREKX0TP"
  };

const app=!firebase.apps.lenght?firebase.initializeApp(firebaseConfig):firebase.app()
const db=app.firestore()
const auth=app.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export {db,auth,provider}