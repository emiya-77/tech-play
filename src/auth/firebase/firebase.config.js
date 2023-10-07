// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt39ARokH7QGWaGF88ar4GQ_Ytw6HRtH8",
  authDomain: "tech-play-f948c.firebaseapp.com",
  projectId: "tech-play-f948c",
  storageBucket: "tech-play-f948c.appspot.com",
  messagingSenderId: "242924547163",
  appId: "1:242924547163:web:9fc52e4698ec1115ac237e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
