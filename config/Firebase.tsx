import firebase from 'firebase/app'
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDWx-wK6Peyp75wz8mePtsovXHmmZs4NtI",
    authDomain: "insta-clone-project-855bf.firebaseapp.com",
    projectId: "insta-clone-project-855bf",
    storageBucket: "insta-clone-project-855bf.appspot.com",
    messagingSenderId: "194213756913",
    appId: "1:194213756913:web:4f8975f959542f6097ce50",
    measurementId: "G-73QJDNJ16B"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export default db;