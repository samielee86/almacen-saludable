import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3QXXRZYeiCCbReOG_17jyNe0GPZP7lL4",
  authDomain: "almacen-saludable-99f2e.firebaseapp.com",
  projectId: "almacen-saludable-99f2e",
  storageBucket: "almacen-saludable-99f2e.appspot.com",
  messagingSenderId: "1035146244239",
  appId: "1:1035146244239:web:018c3bae581d82f05bc0fa"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);