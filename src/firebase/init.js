import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDe9kP1Qtl6LDRTVhAASXmf_Z00WMo9Wek",
  authDomain: "bgcs-3a1c1.firebaseapp.com",
  databaseURL: "https://bgcs-3a1c1.firebaseio.com",
  projectId: "bgcs-3a1c1",
  storageBucket: "",
  messagingSenderId: "284579870222",
  appId: "1:284579870222:web:03e83f2d49438e6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
