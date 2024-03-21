// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDZUzwKML9HbpDyDx75REOzN2mvnNZ1k",
  authDomain: "my-scissorapp-capstonepr-69f7c.firebaseapp.com",
  projectId: "my-scissorapp-capstoneproject",
  storageBucket: "my-scissorapp-capstoneproject.appspot.com",
  messagingSenderId: "25036118692",
  appId: "1:25036118692:web:b07f213d99ae165f776431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

