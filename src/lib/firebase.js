import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCU1CkfC-zag_0jTDr6wdwkbGtKJuoDWms',
  authDomain: 'homies-d82f4.firebaseapp.com',
  projectId: 'homies-d82f4',
  storageBucket: 'homies-d82f4.appspot.com',
  messagingSenderId: '622510490430',
  appId: '1:622510490430:web:72838df183aa78793be26f',
  measurementId: 'G-4SSGDH4WXR'
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
