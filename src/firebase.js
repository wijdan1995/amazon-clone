import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBnqp3uzJyq4g_fnR9_wy_A8y2GE7cN6jU",
    authDomain: "clone-6ba24.firebaseapp.com",
    databaseURL: "https://clone-6ba24.firebaseio.com",
    projectId: "clone-6ba24",
    storageBucket: "clone-6ba24.appspot.com",
    messagingSenderId: "199666958054",
    appId: "1:199666958054:web:b0c1b6e0647d10d8af4527",
    measurementId: "G-STNX7REVW2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

export { db, auth  }