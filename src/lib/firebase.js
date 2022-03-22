import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import seed file
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCU1CkfC-zag_0jTDr6wdwkbGtKJuoDWms",
  authDomain: "homies-d82f4.firebaseapp.com",
  projectId: "homies-d82f4",
  storageBucket: "homies-d82f4.appspot.com",
  messagingSenderId: "622510490430",
  appId: "1:622510490430:web:72838df183aa78793be26f",
  measurementId: "G-4SSGDH4WXR",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
