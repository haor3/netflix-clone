import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD4kqkLfceQBhjIJ0LLkTozmqchrQCxyp8',
  authDomain: 'netflix-clone-ed9e5.firebaseapp.com',
  databaseURL: 'https://netflix-clone-ed9e5.firebaseio.com',
  projectId: 'netflix-clone-ed9e5',
  storageBucket: 'netflix-clone-ed9e5.appspot.com',
  messagingSenderId: '569083479692',
  appId: '1:569083479692:web:e3fe63a0ba94bdd2f99da9',
  measurementId: 'G-VM67KRMCCB',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
