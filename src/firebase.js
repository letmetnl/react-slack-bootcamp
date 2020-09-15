import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbbTZeqJE4ibl2DZFECkXst1J_NexGY2g',
  authDomain: 'react-slack-bootcamp-85ac6.firebaseapp.com',
  databaseURL: 'https://react-slack-bootcamp-85ac6.firebaseio.com',
  projectId: 'react-slack-bootcamp-85ac6',
  storageBucket: 'react-slack-bootcamp-85ac6.appspot.com',
  messagingSenderId: '231246570425',
  appId: '1:231246570425:web:74240ec73f8f7e06e84c68',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
