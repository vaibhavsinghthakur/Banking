// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxIM86WvPLYwi0p1_-BVSj0kRIPhmmoD4",
    authDomain: "banking-dfe22.firebaseapp.com",
    projectId: "banking-dfe22",
    storageBucket: "banking-dfe22.appspot.com",
    messagingSenderId: "969112035701",
    appId: "1:969112035701:web:3fe0b151b0129fbba2333c",
    measurementId: "G-EF47KCXF77"
});

const db =firebaseApp.firestore();
const storage = firebase.storage();
const auth=firebase.auth();

export {db,auth,storage};
