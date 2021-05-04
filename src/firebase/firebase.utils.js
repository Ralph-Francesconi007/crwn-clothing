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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account '})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase