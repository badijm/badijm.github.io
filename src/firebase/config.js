import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBkTDk4gMJUMBsLsrWVfBd8z53oaDw6jMo",
  authDomain: "olx-backend.firebaseapp.com",
  projectId: "olx-backend",
  storageBucket: "olx-backend.appspot.com",
  messagingSenderId: "538978154501",
  appId: "1:538978154501:web:596ea62b2cc62a31f7c46c",
  measurementId: "G-BK64ZVWGBB"
};

export const Firebase= firebase.initializeApp(firebaseConfig)//named export