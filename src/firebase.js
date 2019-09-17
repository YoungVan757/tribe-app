import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB9JipR512y9tJRBkyRLDVGMHJubo0xwlc',
  authDomain: 'tribe-f2697.firebaseapp.com',
  databaseURL: 'https://tribe-f2697.firebaseio.com/',
  projectId: 'tribe-f2697',
  storageBucket: 'tribe-f2697.appspot.com',
  messagingSenderId: '661235535606',
  appId: '1:661235535606:web:10cf488d64a2bd74f3e6d7'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}