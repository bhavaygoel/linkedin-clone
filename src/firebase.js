import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAQbc8EBxUOezizcMbNhPZSrEdUnwOSaXE",
    authDomain: "linkedin-clone-1c736.firebaseapp.com",
    projectId: "linkedin-clone-1c736",
    storageBucket: "linkedin-clone-1c736.appspot.com",
    messagingSenderId: "801465585887",
    appId: "1:801465585887:web:b9a4d712823f8a3777596a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };