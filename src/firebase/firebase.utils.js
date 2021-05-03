import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCSKW5_JJQ2mtCeamV5NOJ6e31pNTKKGKE",
  authDomain: "crwn-db-e7376.firebaseapp.com",
  projectId: "crwn-db-e7376",
  storageBucket: "crwn-db-e7376.appspot.com",
  messagingSenderId: "533341677498",
  appId: "1:533341677498:web:d54bbe3947eb392835df83",
  measurementId: "G-73ZNBGF4BM"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account '})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase