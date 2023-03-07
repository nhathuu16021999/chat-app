import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnpdWMPIUuFZbQi2NE8TTXfT4S_M2vGGc',
  authDomain: 'chat-app-55e79.firebaseapp.com',
  projectId: 'chat-app-55e79',
  storageBucket: 'chat-app-55e79.appspot.com',
  messagingSenderId: '881926078569',
  appId: '1:881926078569:web:7e6ee71b14950f032fe2f8',
  measurementId: 'G-R32DLMBY2C',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
}

export { db, auth };
export default firebase;
