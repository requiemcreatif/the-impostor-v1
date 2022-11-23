import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAXDpWloW7awSgqZA1jxFwyp_E5qAHBw1g",
    authDomain: "impostr-889b5.firebaseapp.com",
    projectId: "impostr-889b5",
    storageBucket: "impostr-889b5.appspot.com",
    messagingSenderId: "78039409796",
    appId: "1:78039409796:web:260319249a00a666738ed1"
  };

    firebase.initializeApp(firebaseConfig);

    const databaseFirebase = firebase.firestore();
    const projectAuth = firebase.auth();

    export { databaseFirebase, projectAuth  };