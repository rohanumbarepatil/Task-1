import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

   apiKey: "AIzaSyAbnYSVdl4WZ5rKWXpn-igHZYaoNkjvJDc",

  authDomain: "job-portal-system-8fa48.firebaseapp.com",

  databaseURL: "https://job-portal-system-8fa48-default-rtdb.firebaseio.com",

  projectId: "job-portal-system-8fa48",

  storageBucket: "job-portal-system-8fa48.firebasestorage.app",

  messagingSenderId: "768033881454",

  appId: "1:768033881454:web:53450b64957670e3eed57f",

  measurementId: "G-CCTGJKZNWH" 

};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;