import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwEFseFg7KdAYR6RFDpSZ35CFCwazg9co",
    authDomain: "sql-demos-d52f7.firebaseapp.com",
    projectId: "sql-demos-d52f7",
    storageBucket: "sql-demos-d52f7.appspot.com",
    messagingSenderId: "524852975755",
    appId: "1:524852975755:web:38974b07bea61af094dc8e",
    measurementId: "G-NJGS859GCJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('firebase configurado')

  export default firebase.firestore();