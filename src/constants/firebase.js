import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC6XNYZk5JbU0Uz0SdAYmMFXTSQxBfQYa4",
  authDomain: "nicosburgerhouse.firebaseapp.com",
  databaseURL: "https://nicosburgerhouse.firebaseio.com",
  projectId: "nicosburgerhouse",
  storageBucket: "nicosburgerhouse.appspot.com",
  messagingSenderId: "573445676727",
  appId: "1:573445676727:web:2cca43e205de7f09a37732"
};

firebase.initializeApp(config)
export const storage = firebase.storage().ref()

