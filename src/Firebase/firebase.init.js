// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8rSTDwuMA8ddgyujN_UhojyqWYi2rm7w',
  authDomain: 'mango-store-app.firebaseapp.com',
  projectId: 'mango-store-app',
  storageBucket: 'mango-store-app.firebasestorage.app',
  messagingSenderId: '990028247684',
  appId: '1:990028247684:web:5f327e4b11712010a4c8d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
