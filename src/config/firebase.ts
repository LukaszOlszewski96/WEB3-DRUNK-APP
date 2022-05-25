const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDljgJaenPEtPRvj1ZmOOwn_JzHy8h28uM",
  authDomain: "testdevdb-d34df.firebaseapp.com",
  projectId: "testdevdb-d34df",
  storageBucket: "testdevdb-d34df.appspot.com",
  messagingSenderId: "1054175626142",
  appId: "1:1054175626142:web:b031427724ac797f664c8f",
  measurementId: "G-PSC361CEJ2",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
