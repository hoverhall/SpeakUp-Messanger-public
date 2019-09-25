import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyARePBO2CJz3raOJXMmSGlbMnLYaYIWNIA",
    authDomain: "speakup-messanger.firebaseapp.com",
    databaseURL: "https://speakup-messanger.firebaseio.com",
    projectId: "speakup-messanger",
    storageBucket: "speakup-messanger.appspot.com",
    messagingSenderId: "382234677355",
    appId: "1:382234677355:web:f26f3fadc9c63ac207a12e"
  };
  // Initialize Firebase
  export const speakUpBase = firebase.initializeApp(firebaseConfig);