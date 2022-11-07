import { initializeApp } from 'firebase/app';
import { collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBW-kimgwPJqGOzYiUtCDO619p7IfgcVkg',
  authDomain: 'react-linkedin-clone-3.firebaseapp.com',
  projectId: 'react-linkedin-clone-3',
  storageBucket: 'react-linkedin-clone-3.appspot.com',
  messagingSenderId: '243799615788',
  appId: '1:243799615788:web:a862be5e46b089e6f9a489'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { db, auth, collection };
