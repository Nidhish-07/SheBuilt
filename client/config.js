// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrACA3VDzRrRcF6FbAqfujIcXg_0a88Ow",
    authDomain: "she-built.firebaseapp.com",
    projectId: "she-built",
    storageBucket: "she-built.appspot.com",
    messagingSenderId: "1018843062901",
    appId: "1:1018843062901:web:dfb7921bb1410e33710e3c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export default db;

export { db, auth, storage, provider }