import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTZWzorRbkFwEWG7DA81qCWUTysOdl-pA",
  authDomain: "slack-app-7228f.firebaseapp.com",
  databaseURL: "https://slack-app-7228f.firebaseio.com",
  projectId: "slack-app-7228f",
  storageBucket: "slack-app-7228f.appspot.com",
  messagingSenderId: "294220160886",
  appId: "1:294220160886:web:9429fae061a886eacc6457",
  measurementId: "G-S2MX1E4KYS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
