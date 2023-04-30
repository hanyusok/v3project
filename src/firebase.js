import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdMXzNke2IT-1zPZNooquj8BLIo4cQp9E",
  authDomain: "v3project-a4f86.firebaseapp.com",
  projectId: "v3project-a4f86",
  storageBucket: "v3project-a4f86.appspot.com",
  messagingSenderId: "1069064038850",
  appId: "1:1069064038850:web:63e46e500d1d0c4a04ce5b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db } ;