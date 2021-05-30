import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBDdM1EW2oXoou0alBIUpGsk6zvXkXuY5c",
  authDomain: "languages-convert.firebaseapp.com",
  projectId: "languages-convert",
  firebaseURL: "languages-convert.firebaseio.com",
  storageBucket: "languages-convert.appspot.com",
  messagingSenderId: "242646947316",
  appId: "1:242646947316:web:cba929a28a5b742f8b55a1"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
