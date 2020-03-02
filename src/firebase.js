import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDYi7gNWV8SKyCRteDJJXYTskHuz8hEkFM",
  authDomain: "react-slack-clone-55e67.firebaseapp.com",
  databaseURL: "https://react-slack-clone-55e67.firebaseio.com",
  projectId: "react-slack-clone-55e67",
  storageBucket: "react-slack-clone-55e67.appspot.com",
  messagingSenderId: "494596104068",
  appId: "1:494596104068:web:e0523dbaca6f03d33647d1",
  measurementId: "G-3SKQ0YLF6F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
