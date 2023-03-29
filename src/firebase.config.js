import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixdXtTSuK3NBFLUQqWipu4NY_Cl5m3vo",
  authDomain: "house-marketplace-app-b9d0d.firebaseapp.com",
  projectId: "house-marketplace-app-b9d0d",
  storageBucket: "house-marketplace-app-b9d0d.appspot.com",
  messagingSenderId: "955358655918",
  appId: "1:955358655918:web:fdf239ee3d55e839a5843f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()