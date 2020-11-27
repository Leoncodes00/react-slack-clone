import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAe7i3juGvBHgpGIv5Y9gXhpbzBRv5GFLM",
  authDomain: "react-slack-clone-4010b.firebaseapp.com",
  databaseURL: "https://react-slack-clone-4010b.firebaseio.com",
  projectId: "react-slack-clone-4010b",
  storageBucket: "react-slack-clone-4010b.appspot.com",
  messagingSenderId: "478702109964",
  appId: "1:478702109964:web:9f1d404694ac550fb63529",
  measurementId: "G-R7YNY9YGRT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
