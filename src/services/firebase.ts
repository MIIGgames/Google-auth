
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAEPZFqRtZiG-_W93xWFwtugNfJdT6we_U",
  authDomain: "auth-95e5a.firebaseapp.com",
  projectId: "auth-95e5a",
  storageBucket: "auth-95e5a.appspot.com",
  messagingSenderId: "985327335656",
  appId: "1:985327335656:web:2884390bb12dea22b3f15d",
  measurementId: "G-PX0MZZN4EJ"
};

// Inicar a aplicação com o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);