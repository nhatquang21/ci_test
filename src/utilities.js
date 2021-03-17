import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBetbOECy12YEHm2G5EdQCXmskSGH1L4fo",
    authDomain: "ci-final-q.firebaseapp.com",
    projectId: "ci-final-q",
    storageBucket: "ci-final-q.appspot.com",
    messagingSenderId: "771034582284",
    appId: "1:771034582284:web:c1c3ba20b80d452b018d29"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
    console.log('Installed');
  }
  const db = firebase.firestore();