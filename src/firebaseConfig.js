import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDpyGeVqD92pKk-mUYVamEYmdkkwBIasbk",
  authDomain: "coder-react-dream-seller.firebaseapp.com",
  projectId: "coder-react-dream-seller",
  storageBucket: "coder-react-dream-seller.appspot.com",
  messagingSenderId: "226160535141",
  appId: "1:226160535141:web:4a678d8c7d51bcfa20888c"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)