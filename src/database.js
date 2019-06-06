import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCJ5zHuV4C4mvl1PMmNnawefMonc-J7RYg',
  authDomain: 'tribeapp-f985a.firebaseapp.com',
  databaseURL: 'https://tribeapp-f985a.firebaseio.com',
  projectId: 'tribeapp-f985a',
  storageBucket: 'tribeapp-f985a.appspot.com',
  messagingSenderId: '952195046338',
  appId: '1:952195046338:web:73c13d31c63b4d4d'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
