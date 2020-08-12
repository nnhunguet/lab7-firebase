import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBJDHNqiNLNontXbzA35lVDPJMsqZxDxvs",
  authDomain: "firesbasedemo-b52a7.firebaseapp.com",
  projectId: "firesbasedemo-b52a7",
  databaseURL: "https://firesbasedemo-b52a7.firebaseio.com",
  storageBucket: "firesbasedemo-b52a7.appspot.com",
  messagingSenderId: "1007483111762",
  appId: "1:1007483111762:web:c8400c6a9a0cb23a9b928b",
  measurementId: "G-PQGWCXJJSS"
};
firebase.initializeApp(firebaseConfig);
export const database = firebase.database(); 