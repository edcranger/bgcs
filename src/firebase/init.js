import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAyCZ0abm70k65zPogUwIm2pLBibpQi_04",
  authDomain: "bgcs-ce6c6.firebaseapp.com",
  databaseURL: "https://bgcs-ce6c6.firebaseio.com",
  projectId: "bgcs-ce6c6",
  storageBucket: "",
  messagingSenderId: "445451476125",
  appId: "1:445451476125:web:3b16b622c0ddd884"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
