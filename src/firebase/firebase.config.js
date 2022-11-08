// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

  // apiKey: "AIzaSyD-AB4MQW2q-M5HdHumixVXgsu28E9F_Yk",
  // authDomain: "beauty-parlour-cd243.firebaseapp.com",
  // projectId: "beauty-parlour-cd243",
  // storageBucket: "beauty-parlour-cd243.appspot.com",
  // messagingSenderId: "311646377963",
  // appId: "1:311646377963:web:b03bd4364d65698960ebae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app