import firebase from 'firebase/compat/app';
//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBowJq8zB-AOkG6iUIOsPGcmQKGyXSS5bE",
    authDomain: "qpons-740de.firebaseapp.com",
    projectId: "qpons-740de",
    storageBucket: "qpons-740de.appspot.com",
    messagingSenderId: "889313391360",
    appId: "1:889313391360:web:de336009d09e803b4b79e5",
    measurementId: "G-3NQM431C8Z"
  };
  const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

  //firebase.initializeApp(firebaseConfig);
  
//  const storage = firebase.storage().ref();

  export {storage, ref, uploadBytes, getDownloadURL, firebase as default};